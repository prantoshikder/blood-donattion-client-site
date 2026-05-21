import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";

const camps = [
  {
    title: "Dhaka University Blood Drive",
    date: "May 28, 2026",
    time: "9:00 AM – 4:00 PM",
    venue: "TSC, University of Dhaka",
    registered: 142,
    target: 300,
  },
  {
    title: "Corporate Donors Camp",
    date: "Jun 04, 2026",
    time: "10:00 AM – 5:00 PM",
    venue: "Bashundhara City, Dhaka",
    registered: 87,
    target: 200,
  },
  {
    title: "Community Wellness Drive",
    date: "Jun 12, 2026",
    time: "8:00 AM – 2:00 PM",
    venue: "Dhanmondi Lake Park",
    registered: 56,
    target: 150,
  },
];

export default function UpcomingCampsSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="badge">
            <Calendar className="h-3.5 w-3.5" />
            Upcoming events
          </span>
          <h2 className="heading-2 mt-3 text-balance">Join a blood donation camp</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Reserve a spot at a community drive near you — bring a friend and
            double your impact.
          </p>
        </div>
        <Link
          href="/camps"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          See all camps
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {camps.map((c) => {
          const progress = Math.round((c.registered / c.target) * 100);
          return (
            <div key={c.title} className="card group">
              <div className="flex items-start gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-rose-500 text-white shadow-md">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500">{c.date} • {c.time}</p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>{c.venue}</span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" />
                    {c.registered} / {c.target} registered
                  </span>
                  <span className="font-semibold text-brand-700">{progress}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-rose-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl border border-brand-200 bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 active:scale-95">
                Register to attend
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
