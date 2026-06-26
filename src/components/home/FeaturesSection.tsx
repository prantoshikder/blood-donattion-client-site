import { features } from "@/temp/homeData";
import { Star } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">
          <Star className="h-3.5 w-3.5" />
          Features
        </span>
        <h2 className="heading-2 mt-4 text-balance">
          Everything you need to save lives
        </h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          A complete toolkit for donors, hospitals, volunteers, and patients
          built on a modern, accessible foundation.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card group">
            <div
              className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br ${f.color} text-white shadow-md transition group-hover:scale-105`}
            >
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
