import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function GlassCard({ className, hover = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:glow-border cursor-pointer",
        className
      )}
      {...props}
    />
  );
}