import { CheckCircle2, XCircle, Heart } from "lucide-react";
import { checks } from "@/temp/homeData";

export default function EligibilityCheckerSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div>
          <span className="badge">
            <Heart className="h-3.5 w-3.5" />
            Eligibility
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Can you donate blood today?
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Check these basic requirements before booking your donation. Most
            healthy adults qualify — it only takes 30 seconds to find out.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="btn-primary w-full sm:w-auto">
              Take full eligibility quiz
            </button>
            <button className="btn-outline w-full sm:w-auto">
              View detailed criteria
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <p className="font-semibold">Did you know?</p>
            <p className="mt-1 text-amber-800">
              One donation can save up to 3 lives. Most people can donate again
              after 90 days.
            </p>
          </div>
        </div>

        <div className="card sm:p-8">
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Quick eligibility check
          </h3>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Tap each item that matches you.
          </p>

          <ul className="mt-5 space-y-3">
            {checks.map((c) => (
              <li
                key={c.pass}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-brand-300 hover:bg-brand-50/40 sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-900">{c.pass}</p>
                    <p className="text-xs text-slate-500">If not: {c.fail}</p>
                  </div>
                </div>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
            <XCircle className="h-4 w-4 shrink-0 text-slate-400" />
            <p>
              Pregnant, on certain medications, or recently tattooed? Some
              temporary deferrals apply — see full criteria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
