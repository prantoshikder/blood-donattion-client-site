import Link from "next/link";
import {
  Droplet,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  ArrowLeft,
  Bell,
  CheckCircle2,
  Users,
  Activity,
} from "lucide-react";
import Logo from "./Logo";

export default function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="grid min-h-screen bg-white lg:grid-cols-[1fr_1.05fr]">
      {/* Left: form */}
      <div className="relative flex flex-col px-4 py-6 sm:px-8 sm:py-8 lg:px-12">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-rose-100/40 blur-3xl" />

        <div className="relative flex items-center justify-between">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 backdrop-blur transition hover:border-brand-300 hover:text-brand-700 sm:inline-flex"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
        </div>

        <div className="relative flex flex-1 flex-col justify-center py-8 sm:py-10">
          <div className="mx-auto w-full max-w-md">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
              <Sparkles className="h-3 w-3" />
              Welcome
            </span>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">{subtitle}</p>
            <div className="mt-6 sm:mt-8">{children}</div>
          </div>
        </div>

        <p className="relative text-center text-xs text-slate-400 sm:text-left">
          © {new Date().getFullYear()} RedDrop · All rights reserved.
        </p>
      </div>

      {/* Right: visual */}
      <div className="relative hidden overflow-hidden bg-linear-to-br from-brand-600 via-rose-600 to-brand-800 lg:block">
        {/* Grid + blurs */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-15" />
        <div className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-400/20 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between p-10 text-white xl:p-14">
          {/* Top badge */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted by 12,000+ donors
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 px-3 py-1.5 text-xs font-medium text-emerald-100 ring-1 ring-inset ring-emerald-300/30 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
              </span>
              Live network
            </span>
          </div>

          {/* Center content */}
          <div className="mx-auto w-full max-w-md">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 ring-1 ring-inset ring-white/20 backdrop-blur">
              <Droplet className="h-7 w-7 fill-white" />
            </div>
            <h2 className="mt-7 text-3xl font-bold leading-[1.15] xl:text-4xl">
              Every drop counts.
              <br />
              Every donor matters.
            </h2>
            <p className="mt-4 text-base text-white/85">
              Join a community changing lives across Bangladesh — one donation
              at a time.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-3">
              {[
                { i: ShieldCheck, t: "Verified, safe network of donors and hospitals" },
                { i: HeartHandshake, t: "Smart matching with the right blood type nearby" },
                { i: Sparkles, t: "Modern dashboard built for clarity and speed" },
              ].map((x, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 ring-1 ring-inset ring-white/20">
                    <x.i className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-white/95">{x.t}</p>
                </div>
              ))}
            </div>

            {/* Floating live cards */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-amber-200">
                  <Bell className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-wider">
                    Live request
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  O− needed · 2 km
                </p>
                <p className="mt-0.5 text-xs text-white/70">Square Hospital</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-emerald-200">
                  <CheckCircle2 className="h-4 w-4" />
                  <p className="text-[11px] font-semibold uppercase tracking-wider">
                    Just saved
                  </p>
                </div>
                <p className="mt-2 text-sm font-semibold text-white">
                  Sadia donated O+
                </p>
                <p className="mt-0.5 text-xs text-white/70">12 min ago</p>
              </div>
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-base font-bold leading-none">12.4K</p>
                <p className="mt-1 text-[11px] text-white/70">Donors</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 border-x border-white/10 px-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                <Activity className="h-4 w-4" />
              </div>
              <div>
                <p className="text-base font-bold leading-none">38K+</p>
                <p className="mt-1 text-[11px] text-white/70">Lives saved</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/15">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-base font-bold leading-none">640+</p>
                <p className="mt-1 text-[11px] text-white/70">Hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
