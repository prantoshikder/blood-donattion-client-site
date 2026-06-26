import { steps } from "@/temp/homeData";
import { ArrowRight, Clock } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-rose-50/70 to-white py-14 sm:py-20">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="section relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Clock className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Save a life in 3 simple steps
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            From sign-up to saving a life — it only takes a few minutes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative">
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60 sm:p-8">
                {/* Oversized watermark number */}
                <span className="pointer-events-none absolute -right-2 -top-5 select-none text-8xl font-extrabold text-brand-100/80 transition-colors duration-300 group-hover:text-brand-200/80">
                  {s.n}
                </span>

                {/* Gradient number badge */}
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-rose-600 text-lg font-bold text-white shadow-lg shadow-brand-200/70 transition-transform duration-300 group-hover:scale-110">
                  {s.n}
                </div>

                <h3 className="relative mt-5 text-base font-semibold text-slate-900 sm:text-lg">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>

              {/* Connector arrow in a floating chip */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white shadow-md ring-1 ring-slate-100 md:grid">
                  <ArrowRight className="h-4 w-4 text-brand-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
