import { cn } from "@/lib/utils";

interface DataChipProps {
  label: string;
  color?: "teal" | "purple" | "blue";
  className?: string;
}

export function DataChip({ label, color = "teal", className }: DataChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-1 rounded-DEFAULT font-mono text-xs uppercase",
        color === "teal" && "bg-accent-tertiary/10 text-accent-tertiary border border-accent-tertiary/30",
        color === "purple" && "bg-secondary/10 text-secondary border border-secondary/30",
        color === "blue" && "bg-primary/10 text-primary border border-primary/30",
        className
      )}
    >
      {label}
    </span>
  );
}