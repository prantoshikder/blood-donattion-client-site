import { stats } from "@/temp/homeData";

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-slate-50 py-12 sm:py-16">
      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-rose-100/50 blur-3xl" />

      <div className="section relative grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.v}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60 sm:p-7"
          >
            {/* Soft corner glow on hover */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-200/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />

            <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-lg shadow-brand-200/60 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
              <s.icon className="h-7 w-7" />
            </div>

            <p className="relative mt-5 bg-linear-to-br from-brand-600 to-rose-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
              {s.k}
            </p>
            <p className="relative mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-500 sm:text-sm">
              {s.v}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
