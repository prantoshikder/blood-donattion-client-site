import Image from "next/image";
import { team } from "@/temp/aboutData";

export default function TeamSection() {
  return (
    <section className="section py-12 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-2 text-balance">Meet the team</h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          A small, passionate group on a very big mission.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
        {team.map((m) => (
          <div key={m.n} className="card text-center">
            <Image
              src={m.img}
              alt={m.n}
              width={80}
              height={80}
              className="mx-auto h-20 w-20 rounded-2xl object-cover shadow-lg"
            />
            <p className="mt-4 font-semibold text-slate-900">{m.n}</p>
            <p className="text-sm text-slate-500">{m.r}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
