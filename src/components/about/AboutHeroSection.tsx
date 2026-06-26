import PageHero from "@/components/shared/PageHero";
import { Target } from "lucide-react";

export default function AboutHeroSection() {
  return (
    <PageHero
      badgeIcon={Target}
      badgeText="Our mission"
      backgroundImage="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&h=900&fit=crop"
      backgroundAlt="Volunteers giving blood at a donation drive"
      title={
        <>
          Connecting hearts.
          <br />
          <span className="bg-linear-to-r from-brand-200 to-rose-200 bg-clip-text text-transparent">
            One drop at a time.
          </span>
        </>
      }
      subtitle="We're on a mission to make blood donation as effortless as sending a message — so that no patient ever waits when seconds matter."
    />
  );
}
