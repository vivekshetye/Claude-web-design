import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GradientButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function GradientButton({
  className,
  variant = "primary",
  children,
  ...props
}: GradientButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 rounded-DEFAULT font-headline font-semibold text-white transition-all duration-300",
        variant === "primary" &&
          "bg-gradient-primary hover:scale-[1.02] active:scale-[1.02] shadow-glow-primary hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]",
        variant === "secondary" &&
          "bg-transparent border border-border-subtle hover:bg-white/5 hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}