import { Droplet } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import DonorSearchBar from "./DonorSearchBar";

export default function DonorsHeroSection() {
  return (
    <PageHero
      badgeIcon={Droplet}
      badgeText="Verified donor network"
      title="Find a donor near you"
      subtitle="Search by blood group, city, or hospital. Reach verified donors in just a few taps."
    >
      <DonorSearchBar />
    </PageHero>
  );
}
