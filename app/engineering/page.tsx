"use client";

import { NavBar } from "@/components/navigation/nav-bar";
import { TimelineNode } from "@/components/ui/timeline-node";
import { milestones } from "@/lib/constants";

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <NavBar />
      <div className="max-w-container mx-auto px-6 py-20">
        <h1 className="font-headline text-4xl md:text-5xl text-text-heading mb-4">
          Engineering Timeline
        </h1>
        <p className="text-text-body text-lg mb-12 max-w-2xl">
          A journey through 7+ years of building AI/ML systems, scaling architectures,
          and bridging the gap between research and production.
        </p>

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <TimelineNode
              key={milestone.id}
              period={milestone.period}
              title={milestone.title}
              company={milestone.company}
              location={milestone.location}
              description={milestone.description}
              tech={milestone.tech}
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>
      </div>
    </main>
  );
}