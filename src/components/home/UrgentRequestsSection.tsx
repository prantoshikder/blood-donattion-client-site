import { severityStyles, urgentRequests } from "@/temp/homeData";
import { AlertCircle, ArrowRight, Clock, Droplet, MapPin } from "lucide-react";
import Link from "next/link";

export default function UrgentRequestsSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="badge bg-rose-50 text-rose-700">
            <AlertCircle className="h-3.5 w-3.5" />
            Live now
          </span>
          <h2 className="heading-2 mt-3 text-balance">Urgent blood requests</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Real patients near you need help right now. One click could save a
            life today.
          </p>
        </div>
        <Link
          href="/requests"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          View all requests
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {urgentRequests.map((r) => (
          <div key={r.patient} className="card group relative overflow-hidden">
            <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-rose-50/60" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-linear-to-br from-rose-500 to-rose-600 text-white shadow-md">
                  <Droplet className="h-6 w-6 fill-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-extrabold text-slate-900">
                    {r.blood}
                  </p>
                  <p className="text-xs text-slate-500">
                    {r.units} unit(s) needed
                  </p>
                </div>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${severityStyles[r.severity]}`}
              >
                {r.severity}
              </span>
            </div>

            <div className="mt-4 space-y-1.5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{r.patient}</p>
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {r.hospital}
              </p>
              <p className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock className="h-3.5 w-3.5" />
                {r.posted}
              </p>
            </div>

            <button className="mt-5 w-full rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-95">
              Respond now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
