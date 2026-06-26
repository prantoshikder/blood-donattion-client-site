import SiteShell from "@/components/SiteShell";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import BloodCompatibilitySection from "@/components/home/BloodCompatibilitySection";
import CTASection from "@/components/home/CTASection";
import EligibilityCheckerSection from "@/components/home/EligibilityCheckerSection";
import FAQSection from "@/components/home/FAQSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PartnersSection from "@/components/home/PartnersSection";
import RolesSection from "@/components/home/RolesSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UpcomingCampsSection from "@/components/home/UpcomingCampsSection";
import UrgentRequestsSection from "@/components/home/UrgentRequestsSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "RedDrop — Save Lives with a Drop of Blood",
  description:
    "Find verified blood donors near you or post an emergency request in minutes. RedDrop connects donors, receivers, hospitals and blood banks across Bangladesh.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <StatsSection />
      <UrgentRequestsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <EligibilityCheckerSection />
      <BloodCompatibilitySection />
      <RolesSection />
      <UpcomingCampsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <AppDownloadSection />
      <CTASection />
    </SiteShell>
  );
}
