import {
  dashboardRequestColors as colors,
  dashboardRequestList as requests,
} from "@/temp/dashboardData";
import { Calendar, MapPin, Phone, Plus, Search } from "lucide-react";

export default function RequestsPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Blood Requests
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Manage incoming requests and post new ones for patients.
          </p>
        </div>
        <button className="btn-primary w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          New request
        </button>
      </div>

      <div className="card">
        <div className="flex flex-col gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="input pl-10"
              placeholder="Search by patient, hospital, or ID…"
            />
          </div>
          <div className="scroll-x">
            {["All", "Urgent", "Open", "Fulfilled"].map((t, i) => (
              <button
                key={t}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  i === 0
                    ? "bg-brand-600 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile card list */}
      <div className="grid gap-3 md:hidden">
        {requests.map((r) => (
          <div key={r.id} className="card p-4!">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700">
                {r.blood}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-semibold text-slate-900">
                    {r.patient}
                  </p>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${colors[r.status]}`}
                  >
                    {r.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  #{r.id} · {r.units} unit{r.units > 1 ? "s" : ""}
                </p>
                <div className="mt-2 space-y-1 text-xs text-slate-600">
                  <p className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="truncate">{r.hospital}</span>
                  </p>
                  <p className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    {r.needed}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">
              <button
                aria-label="Call"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600"
              >
                <Phone className="h-4 w-4" />
              </button>
              {r.status !== "fulfilled" ? (
                <button className="flex-1 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-700">
                  Respond
                </button>
              ) : (
                <button className="flex-1 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                  View details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="card hidden overflow-hidden p-0 md:block">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-3">Request</th>
                <th className="px-6 py-3">Blood</th>
                <th className="px-6 py-3">Hospital</th>
                <th className="px-6 py-3">Needed</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/60">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900">{r.patient}</p>
                    <p className="text-xs text-slate-500">#{r.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-50 text-xs font-bold text-brand-700">
                        {r.blood}
                      </span>
                      <span className="text-xs text-slate-500">
                        {r.units} unit{r.units > 1 ? "s" : ""}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="inline-flex items-center gap-1 text-slate-700">
                      <MapPin className="h-3.5 w-3.5 text-slate-400" />
                      {r.hospital}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="inline-flex items-center gap-1 text-slate-700">
                      <Calendar className="h-3.5 w-3.5 text-slate-400" />
                      {r.needed}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${colors[r.status]}`}
                    >
                      {r.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">
                      View
                    </button>
                    {r.status !== "fulfilled" && (
                      <button className="ml-2 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700">
                        Respond
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
