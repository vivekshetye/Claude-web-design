#!/usr/bin/env python3
"""
Fetch YouTube channel videos using yt-dlp and output JSON for website integration.

Usage:
    pip install yt-dlp
    python fetch_youtube_videos.py

Output: channel_videos.json in the same directory
"""

import json
import subprocess
import re
from pathlib import Path


def format_views(count):
    """Format view count to K/M format."""
    if count is None:
        return "0"
    if count >= 1_000_000:
        return f"{count / 1_000_000:.1f}M".replace(".0M", "M")
    if count >= 1_000:
        return f"{count / 1_000:.0f}K".replace(".0K", "K")
    return str(count)


def format_duration(seconds):
    """Format seconds to HH:MM:SS or MM:SS format."""
    if seconds is None:
        return "0:00"
    seconds = int(seconds)
    hours, remainder = divmod(seconds, 3600)
    minutes, secs = divmod(remainder, 60)
    if hours > 0:
        return f"{hours}:{minutes:02d}:{secs:02d}"
    return f"{minutes}:{secs:02d}"


def fetch_youtube_videos(channel_url, limit=50):
    """
    Fetch videos from a YouTube channel using yt-dlp.

    Args:
        channel_url: URL of the YouTube channel
        limit: Maximum number of videos to fetch

    Returns:
        List of video dictionaries with id, title, views, duration, thumbnail, category
    """
    print(f"Fetching videos from {channel_url}...")

    # Get the channel's uploads playlist ID first
    info_cmd = [
        "yt-dlp",
        "--dump-single-json",
        "--flat-playlist",
        "--playlist-end", "1",
        "--",
        channel_url
    ]

    info_result = subprocess.run(info_cmd, capture_output=True, text=True)
    uploads_url = channel_url

    if info_result.returncode == 0:
        try:
            data = json.loads(info_result.stdout.strip())
            # Get the uploads playlist URL
            entries = data if isinstance(data, list) else [data]
            for entry in entries:
                if entry and entry.get("uploads_url"):
                    uploads_url = "https://www.youtube.com" + entry["uploads_url"]
                    print(f"Found uploads playlist: {uploads_url}")
                    break
        except (json.JSONDecodeError, KeyError):
            pass

    # Now fetch from the uploads playlist with full metadata
    cmd = [
        "yt-dlp",
        "--dump-single-json",
        "--flat-playlist",
        "--playlist-end", str(limit),
        "--no-warnings",
        "--",
        uploads_url
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)

    if result.returncode != 0:
        print(f"Error fetching videos: {result.stderr}")
        return []

    videos = []

    # --dump-single-json returns a single JSON object with entries array
    try:
        data = json.loads(result.stdout.strip())
        # Handle both single video (dict) and playlist (list) responses
        entries = data if isinstance(data, list) else data.get("entries", [])
        for video in entries:
            if video is None:
                continue
            video_id = video.get("id", "")
            # Construct thumbnail URL from video ID (more reliable than API response)
            thumbnail = f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg"
            videos.append({
                "id": video_id,
                "title": video.get("title", ""),
                "views": format_views(video.get("view_count")),
                "duration": format_duration(video.get("duration")),
                "thumbnail": thumbnail,
                "category": "AI Agents",  # Default category - can be refined
            })
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON: {e}")
        print(f"Raw output: {result.stdout[:500]}")

    return videos


def main():
    channel_url = "https://www.youtube.com/@Vivek-Shetye"
    output_path = Path(__file__).parent / "channel_videos.json"

    videos = fetch_youtube_videos(channel_url, limit=50)

    if videos:
        with open(output_path, 'w') as f:
            json.dump(videos, f, indent=2)
        print(f"Successfully fetched {len(videos)} videos")
        print(f"Output written to: {output_path}")
    else:
        print("No videos fetched. Check your network connection and yt-dlp installation.")


if __name__ == "__main__":
    main()