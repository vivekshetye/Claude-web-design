import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

const navLinks = [
  { href: "/", label: "About Me" },
  { href: "/engineering", label: "Engineering Journey" },
  { href: "/content", label: "Content" },
  { href: "/tech-stack", label: "Skills" },
];

export function NavBar() {
  return (
    <header className="bg-background-primary/80 backdrop-blur-xl sticky top-0 w-full z-50 border-b border-border-subtle shadow-[0_0_20px_rgba(0,102,255,0.1)]">
      <div className="flex justify-between items-center w-full px-gutter h-20 max-w-container mx-auto">
        <Link href="/" className="font-headline text-2xl font-bold text-on-surface tracking-tighter">
          Vivek Shetye
        </Link>
        <div className="hidden md:flex gap-md items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 hover:bg-white/5 px-3 py-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-sm">
          <Link
            href="/content"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-DEFAULT bg-gradient-primary text-white font-mono text-sm font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-glow-primary"
          >
            Hire Solopreneur
          </Link>
          <button className="p-2 rounded-DEFAULT border border-border-subtle hover:bg-white/5 transition-all duration-300">
            <svg className="w-5 h-5 text-on-surface-variant" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}