import { perks } from "@/temp/homeData";
import { Apple, Smartphone } from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="grid items-center gap-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10 md:grid-cols-2 md:gap-14 md:p-14">
        <div>
          <span className="badge">
            <Smartphone className="h-3.5 w-3.5" />
            Mobile app
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Take RedDrop with you, everywhere
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Get push alerts when someone nearby needs your blood type. Respond
            in one tap. Available on iOS and Android.
          </p>

          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li
                key={p.text}
                className="flex items-center gap-3 text-sm text-slate-700"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600">
                  <p.icon className="h-4 w-4" />
                </div>
                {p.text}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex min-h-13 items-center justify-center gap-3 rounded-2xl bg-slate-900 px-5 text-white transition hover:bg-slate-800">
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Download on
                </p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>
            <button className="inline-flex min-h-13 items-center justify-center gap-3 rounded-2xl bg-slate-900 px-5 text-white transition hover:bg-slate-800">
              <Smartphone className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Get it on
                </p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-brand-200/50 via-rose-100/50 to-amber-100/30 blur-2xl" />
          <div className="relative rotate-2 rounded-4xl border-10 border-slate-900 bg-white p-4 shadow-2xl">
            <div className="rounded-2xl bg-linear-to-br from-brand-50 via-white to-rose-50 p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-500">RedDrop</p>
                <div className="flex h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <div className="mt-4 rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-100">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">
                  Emergency
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  O− needed at Square Hospital
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  2.3 km away • 12 min ago
                </p>
                <button className="mt-3 w-full rounded-xl bg-brand-600 py-2 text-xs font-semibold text-white">
                  Respond now
                </button>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {["A+", "B+", "O+"].map((b) => (
                  <div
                    key={b}
                    className="rounded-xl bg-white py-2 text-center text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
