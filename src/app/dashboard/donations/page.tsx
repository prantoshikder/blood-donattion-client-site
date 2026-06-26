import { Award, Calendar, Droplet, Hospital, Plus, TrendingUp } from "lucide-react";
import {
  donationHistory as history,
  donationAchievements as achievements,
} from "@/temp/dashboardData";

export default function DonationsPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            My Donations
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Track every drop you've given — and the lives changed because of it.
          </p>
        </div>
        <button className="btn-primary w-full sm:w-auto">
          <Plus className="h-4 w-4" />
          Log new donation
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="card flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-rose-600 text-white">
            <Droplet className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">12</p>
            <p className="text-sm text-slate-500">Total donations</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">36</p>
            <p className="text-sm text-slate-500">Lives saved</p>
          </div>
        </div>
        <div className="card flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">Gold</p>
            <p className="text-sm text-slate-500">Donor tier</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-900">Donation history</h2>
          <div className="mt-5 space-y-3">
            {history.map((h) => (
              <div
                key={h.date}
                className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-white p-3 transition hover:border-slate-200 hover:bg-slate-50 sm:p-4"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 sm:h-12 sm:w-12">
                    <Droplet className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">{h.place}</p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {h.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Hospital className="h-3 w-3" />
                        {h.recipient}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  {h.units} unit
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-slate-900">Achievements</h2>
          <p className="text-sm text-slate-500">Earned by your generosity</p>
          <div className="mt-5 space-y-3">
            {achievements.map((a) => (
              <div
                key={a.t}
                className={`flex items-center gap-3 rounded-2xl border p-3 ${
                  a.earned
                    ? "border-amber-200 bg-amber-50/60"
                    : "border-slate-200 bg-slate-50/60"
                }`}
              >
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    a.earned ? "bg-amber-400 text-white" : "bg-slate-200 text-slate-400"
                  }`}
                >
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{a.t}</p>
                  <p className="text-xs text-slate-500">{a.d}</p>
                </div>
                {a.earned && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                    Unlocked
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
