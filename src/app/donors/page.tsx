import SiteShell from "@/components/SiteShell";
import DonorsHeroSection from "@/components/donors/DonorsHeroSection";
import DonorsStatsBar from "@/components/donors/DonorsStatsBar";
import DonorsListSection from "@/components/donors/DonorsListSection";
import HowToRequestSection from "@/components/donors/HowToRequestSection";
import BecomeDonorCTA from "@/components/donors/BecomeDonorCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Find Blood Donors Near You",
  description:
    "Search verified blood donors by blood group, city or hospital. Reach available O+, A+, B+, AB+ and all other blood-type donors in just a few taps with RedDrop.",
  path: "/donors",
});

export default function PublicDonorsPage() {
  return (
    <SiteShell>
      <DonorsHeroSection />
      <DonorsStatsBar />
      <DonorsListSection />
      <HowToRequestSection />
      <BecomeDonorCTA />
    </SiteShell>
  );
}
