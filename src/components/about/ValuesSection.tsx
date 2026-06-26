import { values } from "@/temp/aboutData";
import { Compass } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-12 sm:py-20">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="section relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Compass className="h-3.5 w-3.5" />
            Our values
          </span>
          <h2 className="heading-2 mt-4 text-balance">What we stand for</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Three values guide every product decision we make.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.t}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60"
            >
              {/* Top accent bar that grows on hover */}
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-brand-500 to-rose-500 transition-transform duration-300 group-hover:scale-x-100" />

              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-200/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />

              <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                <v.i className="h-6 w-6" />
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-slate-900">
                {v.t}
              </h3>
              <p className="relative mt-2 text-sm text-slate-600">{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
