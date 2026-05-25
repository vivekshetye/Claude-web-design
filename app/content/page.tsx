"use client";

import { NavBar } from "@/components/navigation/nav-bar";
import { VideoCard } from "@/components/ui/video-card";
import { DataChip } from "@/components/ui/data-chip";
import { GradientButton } from "@/components/ui/gradient-button";
import { GlassCard } from "@/components/ui/glass-card";
import channelVideos from "@/scripts/channel_videos.json";

const categories = ["AI Agents", "Automation", "GenAI", "System Design"];

type Video = {
  id: string;
  title: string;
  views: string;
  duration: string;
  thumbnail: string;
  category: string;
};

const videos: Video[] = channelVideos;

export default function ContentPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <NavBar />
      <div className="max-w-container mx-auto px-6 py-20">
        <h1 className="font-headline text-4xl md:text-5xl text-text-heading mb-4">
          Teaching the Builders of Tomorrow
        </h1>
        <p className="text-text-body text-lg mb-8 max-w-2xl">
          100K+ subscribers learning AI Agents, Automation, and GenAI through
          practical, production-ready tutorials.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <DataChip key={cat} label={cat} />
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              views={video.views}
              duration={video.duration}
              category={video.category}
              thumbnail={video.thumbnail}
              videoId={video.id}
            />
          ))}
        </div>

        {/* Newsletter CTA */}
        <GlassCard className="p-8 text-center">
          <h2 className="font-headline text-2xl text-text-heading mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-text-body mb-6">
            Get notified about new tutorials, code-alongs, and deep dives into
            building AI-native products.
          </p>
          <GradientButton className="cursor-pointer">
            Subscribe on YouTube
          </GradientButton>
        </GlassCard>
      </div>
    </main>
  );
}