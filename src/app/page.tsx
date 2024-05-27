import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <StickyScrollReveal />
    </div>
  );
}
