"use client";

import { VideoCard } from "@/components/ui/video-card";
import { featuredVideos } from "@/lib/constants";

export function FeaturedVideos() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-container mx-auto">
        <h2 className="font-headline text-3xl text-text-heading text-center mb-12">
          Featured YouTube Builds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              thumbnail={video.thumbnail}
              views={video.views}
              duration={video.duration}
              category={video.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}