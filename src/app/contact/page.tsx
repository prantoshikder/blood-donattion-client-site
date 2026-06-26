import SiteShell from "@/components/SiteShell";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactLocationSection from "@/components/contact/ContactLocationSection";

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactHeroSection />

      <section className="section py-10 sm:py-16">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-5">
          <ContactInfoCards />
          <ContactForm />
        </div>
      </section>

      <ContactLocationSection />
    </SiteShell>
  );
}
