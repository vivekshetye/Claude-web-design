import { NavBar } from "@/components/navigation/nav-bar";
import { HeroSection, FeaturedVideos, SocialProof, Footer } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background-primary text-text-body">
      <NavBar />
      <HeroSection />
      <FeaturedVideos />
      <SocialProof />
      <Footer />
    </main>
  );
}