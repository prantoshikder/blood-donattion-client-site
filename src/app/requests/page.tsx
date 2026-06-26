import SiteShell from "@/components/SiteShell";
import RequestsHeroSection from "@/components/requests/RequestsHeroSection";
import RequestsListSection from "@/components/requests/RequestsListSection";

export default function PublicRequestsPage() {
  return (
    <SiteShell>
      <RequestsHeroSection />
      <RequestsListSection />
    </SiteShell>
  );
}
