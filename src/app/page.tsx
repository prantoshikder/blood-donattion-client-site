import SiteShell from "@/components/SiteShell";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import UrgentRequestsSection from "@/components/home/UrgentRequestsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import EligibilityCheckerSection from "@/components/home/EligibilityCheckerSection";
import BloodCompatibilitySection from "@/components/home/BloodCompatibilitySection";
import RolesSection from "@/components/home/RolesSection";
import UpcomingCampsSection from "@/components/home/UpcomingCampsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnersSection from "@/components/home/PartnersSection";
import FAQSection from "@/components/home/FAQSection";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import CTASection from "@/components/home/CTASection";
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
