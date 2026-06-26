import { stats } from "@/temp/homeData";

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70">
      <div className="section grid grid-cols-2 gap-4 py-8 sm:py-10 md:grid-cols-4 md:gap-6">
        {stats.map((s) => (
          <div key={s.v} className="text-center md:text-left">
            <p className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{s.k}</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
