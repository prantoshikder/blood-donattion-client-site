import SiteShell from "@/components/SiteShell";
import RequestsHeroSection from "@/components/requests/RequestsHeroSection";
import RequestsListSection from "@/components/requests/RequestsListSection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Live Blood Requests",
  description:
    "See real, urgent blood requests near you and respond in one tap. Browse emergencies by blood group and city, or post your own request on RedDrop.",
  path: "/requests",
});

export default function PublicRequestsPage() {
  return (
    <SiteShell>
      <RequestsHeroSection />
      <RequestsListSection />
    </SiteShell>
  );
}
