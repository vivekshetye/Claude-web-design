"use client";

import { NavBar } from "@/components/navigation/nav-bar";
import { CapabilityCard } from "@/components/sections/capability-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { GlassCard } from "@/components/ui/glass-card";
import { techStack } from "@/lib/constants";

export default function TechStackPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <NavBar />
      <div className="max-w-container mx-auto px-6 py-20">
        <h1 className="font-headline text-4xl md:text-5xl text-text-heading mb-4">
          Technical Craftsmanship
        </h1>
        <p className="text-text-body text-lg mb-12 max-w-2xl">
          A comprehensive toolkit for building production-ready AI/ML systems,
          from backend infrastructure to cutting-edge LLM implementations.
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap gap-6 mb-12">
          <GlassCard className="px-6 py-4 text-center">
            <p className="font-headline text-2xl text-primary mb-1">40+</p>
            <p className="text-text-body text-sm">Models Deployed</p>
          </GlassCard>
          <GlassCard className="px-6 py-4 text-center">
            <p className="font-headline text-2xl text-secondary mb-1">99.9%</p>
            <p className="text-text-body text-sm">Uptime SLA</p>
          </GlassCard>
          <GlassCard className="px-6 py-4 text-center">
            <p className="font-headline text-2xl text-accent-tertiary mb-1">2M+</p>
            <p className="text-text-body text-sm">Lines of Code</p>
          </GlassCard>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <CapabilityCard title={techStack.backend.title} items={techStack.backend.items} />
          <CapabilityCard title={techStack.aiMl.title} items={techStack.aiMl.items} />
          <CapabilityCard title={techStack.llm.title} items={techStack.llm.items} />
          <CapabilityCard title={techStack.data.title} items={techStack.data.items} />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton className="cursor-pointer">
            Discuss a Project
          </GradientButton>
          <GradientButton variant="secondary" className="cursor-pointer">
            Watch on YouTube
          </GradientButton>
        </div>
      </div>
    </main>
  );
}