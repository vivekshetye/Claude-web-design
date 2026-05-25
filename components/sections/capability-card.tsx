import { GlassCard } from "@/components/ui/glass-card";
import { DataChip } from "@/components/ui/data-chip";

interface CapabilityCardProps {
  title: string;
  items: string[];
}

export function CapabilityCard({ title, items }: CapabilityCardProps) {
  return (
    <GlassCard hover className="p-6">
      <h3 className="font-headline text-xl text-text-heading mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <DataChip key={item} label={item} />
        ))}
      </div>
    </GlassCard>
  );
}