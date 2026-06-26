import PageHero from "@/components/shared/PageHero";
import { MessageSquare } from "lucide-react";

export default function ContactHeroSection() {
  return (
    <PageHero
      badgeIcon={MessageSquare}
      badgeText="We'd love to hear from you"
      backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=900&fit=crop"
      backgroundAlt="Person writing a message at a desk"
      title="Get in touch"
      subtitle="Whether you're a donor, hospital, or just curious — drop us a line and we'll get back within a day."
    />
  );
}
