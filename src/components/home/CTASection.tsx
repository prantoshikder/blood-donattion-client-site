import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-rose-600 to-brand-800 p-7 text-white shadow-2xl sm:p-10 md:p-16">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl sm:h-72 sm:w-72" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-300/10 blur-2xl sm:h-72 sm:w-72" />
        <div className="relative grid items-center gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
              Be the reason someone lives today.
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">
              Join 12,000+ donors making a difference every day. Sign up in
              under a minute and start saving lives.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
            <Link
              href="/signup"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
            >
              Create free account
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
