import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  Users,
  Activity,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:24px_24px] opacity-50 sm:bg-[size:32px_32px]" />
      <div className="absolute -left-32 -top-32 -z-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -right-32 top-40 -z-10 h-64 w-64 rounded-full bg-rose-100 blur-3xl sm:h-96 sm:w-96" />

      <div className="section grid gap-10 py-12 sm:py-16 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-28">
        <div className="animate-float-up">
          <span className="badge">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden xs:inline sm:inline">Trusted by 12,000+ donors</span>
            <span className="xs:hidden sm:hidden">12K+ trusted donors</span>
          </span>
          <h1 className="heading-1 mt-4 text-balance sm:mt-5">
            Donate Blood.
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
              Save a Life.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg">
            RedDrop connects donors, hospitals, and volunteers in one
            beautifully simple platform. Find the right blood, when and where
            it's needed most.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link href="/signup?role=donor" className="btn-primary w-full sm:w-auto">
              Become a Donor
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/requests" className="btn-outline w-full sm:w-auto">
              Request Blood
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600 sm:mt-10 sm:gap-6">
            {[
              "Free forever",
              "Verified network",
              "24/7 emergency",
            ].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-200/40 via-rose-100/50 to-amber-100/40 blur-2xl" />
          <div className="relative grid gap-4">
            <div className="card relative overflow-hidden shadow-xl sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    Quick search
                  </p>
                  <h3 className="mt-1 truncate text-base font-semibold text-slate-900 sm:text-lg">
                    Find a donor near you
                  </h3>
                </div>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 sm:h-12 sm:w-12">
                  <Droplet className="h-5 w-5 fill-brand-600 sm:h-6 sm:w-6" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {bloodGroups.map((b) => (
                  <button
                    key={b}
                    className="rounded-xl border border-slate-200 bg-white py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 active:scale-95"
                  >
                    {b}
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700">
                <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
                <span className="flex-1 truncate">Dhaka, Bangladesh</span>
                <button className="shrink-0 rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700">
                  Search
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="card flex items-center gap-3 !p-4 sm:!p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 sm:h-12 sm:w-12">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-slate-900 sm:text-2xl">12.4K</p>
                  <p className="truncate text-xs text-slate-500">Active donors</p>
                </div>
              </div>
              <div className="card flex items-center gap-3 !p-4 sm:!p-5">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600 sm:h-12 sm:w-12">
                  <Activity className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-slate-900 sm:text-2xl">38K+</p>
                  <p className="truncate text-xs text-slate-500">Lives saved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
