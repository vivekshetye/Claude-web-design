import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  thumbnail?: string;
  views: string;
  duration: string;
  category: string;
  videoId?: string;
  className?: string;
}

export function VideoCard({ title, thumbnail, views, duration, category, videoId, className }: VideoCardProps) {
  const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : "#";

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "glass-panel rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:glow-border block",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-secondary-container/40" />
        )}
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-5 h-5 text-accent-tertiary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-border-subtle text-xs text-accent-tertiary uppercase">
          {category}
        </div>
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="font-headline text-lg text-on-surface mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-on-surface-variant">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {views} views
          </span>
          <span className="text-primary-container">{duration}</span>
        </div>
      </div>
    </a>
  );
}