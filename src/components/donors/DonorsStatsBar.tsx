import { donorStats } from "@/temp/donorsData";

export default function DonorsStatsBar() {
  return (
    <section className="section relative z-10 -mt-8 sm:-mt-12">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-brand-950 to-slate-900 p-4 shadow-2xl shadow-brand-900/30 sm:p-6">
        {/* Ambient glows for a modern, depth-rich backdrop */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-10 h-56 w-56 rounded-full bg-rose-500/20 blur-3xl" />

        <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {donorStats.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/20 text-brand-300 ring-1 ring-inset ring-brand-400/30 transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-200">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
