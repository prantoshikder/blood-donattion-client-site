import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  HeartHandshake,
  Hospital,
  ShieldCheck,
  Users,
  Activity,
  Search,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  Sparkles,
  Bell,
} from "lucide-react";
import SiteShell from "@/components/SiteShell";

const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

const features = [
  {
    icon: Search,
    title: "Find Donors Instantly",
    desc: "Search by blood group, city, or hospital and reach verified donors in seconds.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    desc: "Broadcast urgent requests and notify nearby donors automatically.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    desc: "Every donor and hospital is verified to keep the network safe and trustworthy.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Activity,
    title: "Donation History",
    desc: "Track every donation, eligibility, and next safe donation date in one place.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Hospital,
    title: "Hospital Network",
    desc: "Hospitals and blood banks can manage inventory and request directly from donors.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Hub",
    desc: "Volunteers organize camps, manage requests, and grow the donor community.",
    color: "from-pink-500 to-fuchsia-600",
  },
];

const steps = [
  {
    n: "01",
    title: "Create your account",
    desc: "Sign up as a donor, receiver, volunteer, or hospital in less than a minute.",
  },
  {
    n: "02",
    title: "Find or request blood",
    desc: "Search by blood type or post an urgent request — we route it to the nearest matches.",
  },
  {
    n: "03",
    title: "Connect & save a life",
    desc: "Chat, arrange a meet at a hospital, and donate. Track every life you helped save.",
  },
];

const testimonials = [
  {
    name: "Sadia Rahman",
    role: "Donor • O+",
    quote:
      "I donated twice through RedDrop. The app reminds me when I'm eligible again. Truly thoughtful.",
  },
  {
    name: "Dr. Imran Hossain",
    role: "Hospital Coordinator",
    quote:
      "Our blood bank's emergency response time dropped by 60% after joining RedDrop.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Volunteer",
    quote:
      "Organizing camps used to be chaotic. Now everything from invites to records is one tap away.",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
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

          {/* Hero card */}
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

      {/* Stats strip */}
      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="section grid grid-cols-2 gap-4 py-8 sm:py-10 md:grid-cols-4 md:gap-6">
          {[
            { k: "12,400+", v: "Verified Donors" },
            { k: "640+", v: "Partner Hospitals" },
            { k: "38,200", v: "Donations" },
            { k: "24/7", v: "Emergency" },
          ].map((s) => (
            <div key={s.v} className="text-center md:text-left">
              <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{s.k}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Star className="h-3.5 w-3.5" />
            Features
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Everything you need to save lives
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            A complete toolkit for donors, hospitals, volunteers, and patients
            built on a modern, accessible foundation.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div
                className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md transition group-hover:scale-105`}
              >
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-rose-50/70 to-white py-14 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge">
              <Clock className="h-3.5 w-3.5" />
              How it works
            </span>
            <h2 className="heading-2 mt-4 text-balance">
              Save a life in 3 simple steps
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="relative">
                <div className="card h-full sm:p-8">
                  <span className="text-4xl font-extrabold text-brand-200 sm:text-5xl">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-brand-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="section py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">Built for every role</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Whether you give, receive, organize, or manage — RedDrop has a
            tailored experience for you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {[
            { t: "Donor", d: "Give blood and track impact", i: Droplet, c: "bg-rose-500" },
            { t: "Receiver", d: "Request blood urgently", i: HeartHandshake, c: "bg-amber-500" },
            { t: "Volunteer", d: "Organize camps & drives", i: Users, c: "bg-emerald-500" },
            { t: "Hospital", d: "Manage inventory", i: Hospital, c: "bg-sky-500" },
          ].map((r) => (
            <div key={r.t} className="card group cursor-pointer text-center">
              <div
                className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl sm:h-14 sm:w-14 ${r.c} text-white shadow-lg transition group-hover:scale-110`}
              >
                <r.i className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900 sm:mt-4">{r.t}</h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50/70 py-14 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-balance">
              Loved by donors and hospitals alike
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-700 sm:text-base">“{t.quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="truncate text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
    </SiteShell>
  );
}
