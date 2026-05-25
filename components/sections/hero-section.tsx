"use client";

import { GradientButton } from "@/components/ui/gradient-button";
import { VideoCard } from "@/components/ui/video-card";
import { GlassCard } from "@/components/ui/glass-card";
import { featuredVideos } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-xl">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-gutter text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-subtle bg-surface-card/50 backdrop-blur-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-accent-tertiary animate-pulse" />
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
            Available for Projects
          </span>
        </div>

        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl text-on-surface mb-6 leading-tight tracking-tight">
          Engineering Intelligence<br />
          <span className="text-gradient">at Scale</span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Senior Software Engineer with 7+ years building AI/ML systems.
          Technical Solopreneur crafting AI-native products.
          YouTube Educator with 100K+ subscribers teaching the builders of tomorrow.
        </p>

        <GradientButton className="cursor-pointer">
          Explore My Work
        </GradientButton>

        {/* Credibility strip */}
        <div className="mt-20 border-y border-border-subtle bg-surface-dim py-8">
          <div className="max-w-container mx-auto px-gutter">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="font-headline text-3xl text-on-surface">7+</p>
                <p className="font-mono text-xs text-primary uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-border-subtle" />
              <div className="text-center">
                <p className="font-headline text-3xl text-on-surface">AI/ML</p>
                <p className="font-mono text-xs text-primary uppercase tracking-wider mt-1">Systems Focus</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-border-subtle" />
              <div className="text-center">
                <p className="font-headline text-3xl text-primary-container">100K+</p>
                <p className="font-mono text-xs text-primary uppercase tracking-wider mt-1">YouTube Subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedVideos() {
  return (
    <section className="py-20 px-gutter">
      <div className="max-w-container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-3xl text-on-surface">Featured YouTube Builds</h2>
          <a href="/content" className="text-on-surface-variant hover:text-primary transition-colors duration-300 flex items-center gap-2">
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
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

export function SocialProof() {
  return (
    <section className="py-16 bg-surface-container relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/5 via-background-primary to-background-primary" />
      <div className="relative max-w-container mx-auto px-gutter text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-card border border-border-subtle shadow-[0_0_30px_rgba(139,92,246,0.2)] mb-8">
          <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </div>
        <blockquote className="text-on-surface text-xl md:text-2xl font-headline max-w-2xl mx-auto mb-4">
          Teaching the builders of tomorrow through practical, production-ready tutorials
        </blockquote>
        <p className="font-mono text-sm text-primary uppercase tracking-wider">
          100K+ Subscribers on YouTube
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-background-primary border-t border-border-subtle py-12 px-gutter">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-headline text-xl text-on-surface mb-2">Vivek Shetye</p>
            <p className="font-mono text-xs text-secondary">Technical Solopreneur & AI Educator</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-accent-tertiary transition-colors duration-300">
              GitHub
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-accent-tertiary transition-colors duration-300">
              YouTube
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-on-surface-variant hover:text-accent-tertiary transition-colors duration-300">
              LinkedIn
            </a>
            <a href="/content" className="font-mono text-xs text-on-surface-variant hover:text-accent-tertiary transition-colors duration-300">
              Architecture
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-subtle text-center">
          <p className="font-mono text-xs text-secondary">
            © 2024 Vivek Shetye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}