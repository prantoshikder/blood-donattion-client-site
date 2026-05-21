import {
  Activity,
  ArrowUpRight,
  Calendar,
  Droplet,
  HeartHandshake,
  MapPin,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Total Donations",
    value: "12",
    delta: "+2 this month",
    icon: Droplet,
    color: "from-rose-500 to-rose-600",
  },
  {
    label: "Lives Impacted",
    value: "36",
    delta: "+6 lives saved",
    icon: HeartHandshake,
    color: "from-amber-500 to-orange-600",
  },
  {
    label: "Active Requests",
    value: "4",
    delta: "2 urgent",
    icon: Activity,
    color: "from-violet-500 to-indigo-600",
  },
  {
    label: "Community",
    value: "248",
    delta: "Donors nearby",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
];

const requests = [
  {
    name: "Mehedi Hasan",
    blood: "B+",
    units: 2,
    location: "Square Hospital, Dhaka",
    when: "Today, 4:00 PM",
    urgent: true,
  },
  {
    name: "Anika Sultana",
    blood: "O−",
    units: 1,
    location: "Apollo Hospital, Dhaka",
    when: "Tomorrow, 11:00 AM",
    urgent: true,
  },
  {
    name: "Rakib Hossain",
    blood: "A+",
    units: 3,
    location: "United Hospital, Dhaka",
    when: "Mar 22, 9:00 AM",
    urgent: false,
  },
  {
    name: "Tania Akter",
    blood: "AB+",
    units: 1,
    location: "Evercare Hospital",
    when: "Mar 24, 5:30 PM",
    urgent: false,
  },
];

const monthly = [4, 6, 5, 8, 7, 9, 10, 8, 12, 11, 9, 14];
const max = Math.max(...monthly);

export default function DashboardHome() {
  return (
    <div className="space-y-5 sm:space-y-6">
      {/* Welcome */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            Welcome back, Sadia 👋
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Here's what's happening in your donation network today.
          </p>
        </div>
        <Link
          href="/dashboard/donations"
          className="btn-primary w-full sm:w-auto"
        >
          Schedule donation
          <Calendar className="h-4 w-4" />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card !p-4 sm:!p-5">
            <div className="flex items-start justify-between gap-2">
              <div
                className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md sm:h-11 sm:w-11`}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <span className="hidden items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700 sm:inline-flex">
                <TrendingUp className="h-3 w-3" />
                {s.delta}
              </span>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900 sm:mt-4 sm:text-3xl">{s.value}</p>
            <p className="text-xs text-slate-500 sm:text-sm">{s.label}</p>
            <p className="mt-1 text-[11px] font-medium text-emerald-700 sm:hidden">
              {s.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="card lg:col-span-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                Donation activity
              </h2>
              <p className="text-xs text-slate-500 sm:text-sm">Last 12 months</p>
            </div>
            <select className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600">
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          <div className="mt-6 flex h-44 items-end gap-1.5 sm:mt-8 sm:h-56 sm:gap-3">
            {monthly.map((v, i) => (
              <div
                key={i}
                className="group relative flex flex-1 flex-col items-center justify-end"
              >
                <span className="mb-2 hidden text-[11px] font-semibold text-slate-700 group-hover:block">
                  {v}
                </span>
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-400 transition group-hover:from-brand-700 group-hover:to-brand-500"
                  style={{ height: `${(v / max) * 100}%` }}
                />
                <span className="mt-2 text-[10px] font-medium text-slate-400">
                  {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility */}
        <div className="card relative overflow-hidden bg-gradient-to-br from-brand-600 via-rose-600 to-brand-700 text-white">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <Droplet className="h-8 w-8 fill-white/30" />
          <p className="mt-3 text-xs uppercase tracking-wider text-white/80 sm:text-sm">
            Next donation
          </p>
          <p className="mt-1 text-2xl font-bold sm:text-3xl">24 days</p>
          <p className="text-sm text-white/80">until you're eligible again</p>

          <div className="mt-5 h-2 w-full rounded-full bg-white/20 sm:mt-6">
            <div className="h-full w-3/4 rounded-full bg-white" />
          </div>
          <p className="mt-2 text-xs text-white/80">75% recovered since last donation</p>

          <div className="mt-5 grid grid-cols-2 gap-3 text-xs sm:mt-6">
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
              <p className="text-white/70">Last donation</p>
              <p className="mt-1 font-semibold">Feb 12, 2026</p>
            </div>
            <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
              <p className="text-white/70">Blood group</p>
              <p className="mt-1 font-semibold">O+ Universal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Requests + Quick actions */}
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                Nearby blood requests
              </h2>
              <p className="text-xs text-slate-500 sm:text-sm">
                People who need your help right now
              </p>
            </div>
            <Link
              href="/dashboard/requests"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 sm:text-sm"
            >
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-4 divide-y divide-slate-100">
            {requests.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[auto,1fr,auto] items-start gap-3 py-4 sm:items-center sm:gap-4"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <span className="text-sm font-bold">{r.blood}</span>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate font-semibold text-slate-900">{r.name}</p>
                    {r.urgent && (
                      <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rose-700">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {r.units} unit{r.units > 1 ? "s" : ""} required
                  </p>
                  <div className="mt-2 grid gap-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      <span className="truncate">{r.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 shrink-0" /> {r.when}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                  <button
                    aria-label="Call"
                    className="hidden h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 sm:grid"
                  >
                    <Phone className="h-4 w-4" />
                  </button>
                  <button className="rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-700">
                    Respond
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="space-y-5 sm:space-y-6">
          <div className="card">
            <h3 className="text-base font-semibold text-slate-900">
              Quick actions
            </h3>
            <div className="mt-4 space-y-2">
              {[
                { i: Droplet, t: "Log a donation", c: "text-rose-600 bg-rose-50" },
                { i: HeartHandshake, t: "Post a request", c: "text-amber-600 bg-amber-50" },
                { i: Calendar, t: "Schedule appointment", c: "text-violet-600 bg-violet-50" },
                { i: Users, t: "Invite friends", c: "text-emerald-600 bg-emerald-50" },
              ].map((q) => (
                <button
                  key={q.t}
                  className="flex w-full items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 text-left text-sm font-medium text-slate-700 transition hover:border-slate-200 hover:bg-slate-50 active:scale-[0.99]"
                >
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${q.c}`}>
                    <q.i className="h-5 w-5" />
                  </span>
                  {q.t}
                </button>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-base font-semibold text-slate-900">
              Donation streak
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Keep the rhythm — donate every 3 months.
            </p>
            <div className="mt-4 grid grid-cols-9 gap-1.5 sm:grid-cols-6">
              {Array.from({ length: 18 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-md ${
                    i < 12
                      ? "bg-gradient-to-br from-brand-500 to-rose-600"
                      : "bg-slate-100"
                  }`}
                />
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-500">12 / 18 donations this year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
