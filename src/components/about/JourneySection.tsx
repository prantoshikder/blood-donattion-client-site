import { Sparkles } from "lucide-react";
import { journey } from "@/temp/aboutData";

export default function JourneySection() {
  return (
    <section className="bg-slate-50/70 py-12 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Sparkles className="h-3.5 w-3.5" />
            Our journey
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            From one request to a movement
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            A few milestones from the road so far.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-brand-200 sm:left-1/2" />
          <div className="space-y-8 sm:space-y-12">
            {journey.map((j, idx) => (
              <div
                key={j.y}
                className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:items-center sm:pl-0 ${
                  idx % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <span className="absolute left-1.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-brand-600 shadow sm:left-1/2 sm:-translate-x-1/2" />
                <div className="sm:w-1/2 sm:px-8">
                  <div className="card">
                    <p className="text-sm font-bold text-brand-600">{j.y}</p>
                    <h3 className="mt-1 text-lg font-semibold text-slate-900">
                      {j.t}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{j.d}</p>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
