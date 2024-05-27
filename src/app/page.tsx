import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { MovingCards } from "@/components/MovingCards";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import Webinars from "@/components/Webinars";

export default function Home() {
  return (
    <div className="min-h-screen antialiased bg-black/[0.96] bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <StickyScrollReveal />
      <MovingCards />
      <Webinars />
      <Instructors />
    </div>
  );
}
