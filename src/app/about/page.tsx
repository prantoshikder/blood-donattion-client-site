import SiteShell from "@/components/SiteShell";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import JourneySection from "@/components/about/JourneySection";
import GallerySection from "@/components/about/GallerySection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutHeroSection />
      <OurStorySection />
      <ValuesSection />
      <TeamSection />
      <JourneySection />
      <GallerySection />
      <TestimonialsSection />
      <AboutCTASection />
    </SiteShell>
  );
}
