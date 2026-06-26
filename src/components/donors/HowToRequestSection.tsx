import { Sparkles } from "lucide-react";
import { requestSteps } from "@/temp/donorsData";

export default function HowToRequestSection() {
  return (
    <section className="bg-linear-to-b from-white to-slate-50 py-12 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Sparkles className="h-3.5 w-3.5" />
            Simple process
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            How to request a donor
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Getting the blood you need is just three simple steps away.
          </p>
        </div>

        <div className="relative mx-auto mt-12 grid max-w-5xl gap-8 sm:mt-16 md:grid-cols-3 md:gap-6">
          {/* Connector line linking the steps on desktop */}
          <div className="pointer-events-none absolute inset-x-0 top-9 hidden h-px bg-linear-to-r from-transparent via-brand-200 to-transparent md:block" />

          {requestSteps.map((s, idx) => (
            <div key={s.title} className="group relative">
              <div className="relative z-10 mx-auto grid h-18 w-18 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-lg shadow-brand-200/70 ring-4 ring-white transition-transform duration-300 group-hover:scale-105">
                <s.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-bold text-brand-600 shadow-md ring-1 ring-slate-100">
                  {idx + 1}
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60">
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
