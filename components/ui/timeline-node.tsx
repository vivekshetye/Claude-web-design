"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";
import { DataChip } from "./data-chip";

interface TimelineNodeProps {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  tech: string[];
  isLast?: boolean;
}

export function TimelineNode({
  period,
  title,
  company,
  location,
  description,
  tech,
  isLast = false,
}: TimelineNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative pl-8 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline line */}
      <div
        className={cn(
          "absolute left-3 top-0 w-0.5 h-full",
          !isLast && "bg-gradient-primary"
        )}
      />

      {/* Node dot */}
      <div
        className={cn(
          "absolute left-0 top-0 w-6 h-6 rounded-full border-2 bg-background-primary transition-all duration-300",
          isHovered
            ? "border-primary-container bg-primary-container shadow-glow-primary scale-125"
            : "border-primary"
        )}
      />

      {/* Content card */}
      <GlassCard
        hover
        className={cn(
          "ml-4 transition-all duration-300",
          isHovered && "ml-6"
        )}
      >
        <p className="font-mono text-xs text-accent-tertiary mb-2 uppercase tracking-wider">{period}</p>
        <h3 className="font-headline text-xl text-on-surface mb-1">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-1">{company}</p>
        {location && <p className="text-on-surface-variant/60 text-xs mb-3">{location}</p>}
        <p className="text-text-body text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <DataChip key={t} label={t} />
          ))}
        </div>
      </GlassCard>
    </div>
  );
}