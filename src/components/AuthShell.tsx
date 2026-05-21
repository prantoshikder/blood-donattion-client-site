import Link from "next/link";
import { Droplet, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
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
    <div className="grid min-h-screen bg-white lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex flex-col px-4 py-6 sm:px-8 sm:py-8 lg:px-10">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
        <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
          <div className="mx-auto w-full max-w-md">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
            <div className="mt-6 sm:mt-8">{children}</div>
          </div>
        </div>
      </div>

      {/* Right: visual */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-brand-600 via-rose-600 to-brand-800 lg:block">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-20" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Sparkles className="h-4 w-4" />
            Trusted by 12,000+ donors
          </div>

          <div className="mx-auto w-full max-w-md">
            <Droplet className="h-14 w-14 fill-white/30" />
            <h2 className="mt-6 text-4xl font-bold leading-tight">
              Every drop counts.
              <br />
              Every donor matters.
            </h2>
            <p className="mt-4 text-white/85">
              Join a community changing lives across the country, one donation
              at a time.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { i: ShieldCheck, t: "Verified, safe network of donors and hospitals" },
                { i: HeartHandshake, t: "Smart matching with the right blood type nearby" },
                { i: Sparkles, t: "Modern dashboard built for clarity and speed" },
              ].map((x, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/15 backdrop-blur">
                    <x.i className="h-4 w-4" />
                  </div>
                  <p className="pt-1.5 text-sm text-white/90">{x.t}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} RedDrop · Save lives, together.
          </p>
        </div>
      </div>
    </div>
  );
}
