import SiteShell from "@/components/SiteShell";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import OurStorySection from "@/components/about/OurStorySection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/about/TeamSection";
import JourneySection from "@/components/about/JourneySection";
import GallerySection from "@/components/about/GallerySection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn how RedDrop is making blood donation effortless — our mission, story, values and the team connecting donors with those in need across Bangladesh.",
  path: "/about",
});

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
