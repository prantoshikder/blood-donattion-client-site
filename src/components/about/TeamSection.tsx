import Image from "next/image";
import { Users } from "lucide-react";
import { team } from "@/temp/aboutData";

export default function TeamSection() {
  return (
    <section className="section py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">
          <Users className="h-3.5 w-3.5" />
          The team
        </span>
        <h2 className="heading-2 mt-4 text-balance">Meet the team</h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          A small, passionate group on a very big mission.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
        {team.map((m) => (
          <div
            key={m.n}
            className="group relative aspect-3/4 overflow-hidden rounded-3xl shadow-sm ring-1 ring-slate-200 transition duration-300 hover:shadow-2xl hover:shadow-brand-200/50 hover:ring-brand-300"
          >
            <Image
              src={m.img}
              alt={m.n}
              fill
              quality={85}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Subtle scrim for depth at the bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />

            {/* Floating frosted-glass info card */}
            <div className="absolute inset-x-3 bottom-3 overflow-hidden rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/20">
              {/* Gradient sheen on hover */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <p className="relative font-semibold text-white drop-shadow-sm">
                {m.n}
              </p>
              <p className="relative text-xs text-white/85 sm:text-sm">{m.r}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
