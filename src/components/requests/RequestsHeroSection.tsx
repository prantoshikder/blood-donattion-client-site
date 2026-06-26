import PageHero from "@/components/shared/PageHero";
import { AlertCircle, Plus } from "lucide-react";
import Link from "next/link";
import { requests } from "../../temp/requestData";

export default function RequestsHeroSection() {
  const urgentCount = requests.filter((r) => r.urgent).length;

  return (
    <PageHero
      badgeIcon={AlertCircle}
      badgeText={`${urgentCount} urgent requests right now`}
      backgroundImage="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1600&h=900&fit=crop"
      backgroundAlt="Hospital emergency team responding to a patient"
      title="Blood requests"
      subtitle="Real people, real emergencies. See who needs help right now and be the difference."
    >
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
        <Link href="/signup?role=receiver" className="btn-primary">
          <Plus className="h-4 w-4" />
          Post a request
        </Link>
        <Link href="/donors" className="btn-outline">
          Browse donors
        </Link>
      </div>
    </PageHero>
  );
}
