import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="section py-12 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-rose-600 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="relative mx-auto max-w-2xl">
          <Heart className="mx-auto h-10 w-10 text-white" />
          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Your blood can be someone's tomorrow
          </h2>
          <p className="mt-4 text-sm text-white/90 sm:text-base">
            Join thousands of donors making life-saving connections every day.
            It only takes a minute to sign up.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50"
            >
              Become a donor
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/donors"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Find a donor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
