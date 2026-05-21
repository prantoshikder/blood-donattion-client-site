import { AlertCircle, Calendar, Hospital, MapPin, Phone, Plus, User } from "lucide-react";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";

const requests = [
  { name: "Mehedi Hasan", age: 32, blood: "B+", units: 2, hospital: "Square Hospital, Dhaka", when: "Today, 4:00 PM", urgent: true, reason: "Emergency surgery" },
  { name: "Anika Sultana", age: 26, blood: "O−", units: 1, hospital: "Apollo Hospital, Dhaka", when: "Tomorrow, 11:00 AM", urgent: true, reason: "Delivery complication" },
  { name: "Rakib Hossain", age: 45, blood: "A+", units: 3, hospital: "United Hospital, Dhaka", when: "Mar 22, 9:00 AM", urgent: false, reason: "Scheduled operation" },
  { name: "Tania Akter", age: 29, blood: "AB+", units: 1, hospital: "Evercare Hospital", when: "Mar 24, 5:30 PM", urgent: false, reason: "Thalassemia transfusion" },
  { name: "Imran Khan", age: 38, blood: "O+", units: 2, hospital: "BIRDEM, Dhaka", when: "Mar 25, 10:00 AM", urgent: false, reason: "Accident recovery" },
  { name: "Sumi Akter", age: 22, blood: "A−", units: 1, hospital: "Labaid, Dhaka", when: "Mar 26, 2:00 PM", urgent: false, reason: "Cancer treatment" },
];

export default function PublicRequestsPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-brand-50 via-rose-50/70 to-white">
        <div className="section py-10 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <AlertCircle className="h-3.5 w-3.5" />
              {requests.filter((r) => r.urgent).length} urgent requests right now
            </span>
            <h1 className="heading-1 mt-4 text-balance">
              Blood requests
            </h1>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Real people, real emergencies. See who needs help right now and
              be the difference.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <Link href="/signup?role=receiver" className="btn-primary">
                <Plus className="h-4 w-4" />
                Post a request
              </Link>
              <Link href="/donors" className="btn-outline">
                Browse donors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10 sm:py-16">
        <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="scroll-x">
            {["All requests", "Urgent only", "My city", "Compatible"].map((t, i) => (
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
          <select className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
            <option>All blood groups</option>
            {["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"].map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requests.map((r) => (
            <div key={r.name} className="card group">
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-rose-600 text-lg font-bold text-white shadow-md">
                  {r.blood}
                </div>
                {r.urgent ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-rose-700">
                    <AlertCircle className="h-3 w-3" />
                    Urgent
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                    Open
                  </span>
                )}
              </div>

              <div className="mt-4">
                <p className="font-semibold text-slate-900">{r.name}</p>
                <p className="text-xs text-slate-500">{r.reason}</p>
              </div>

              <div className="mt-4 space-y-2 text-xs text-slate-600">
                <p className="inline-flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-slate-400" />
                  {r.age} years old · {r.units} unit{r.units > 1 ? "s" : ""}
                </p>
                <p className="inline-flex items-center gap-2">
                  <Hospital className="h-3.5 w-3.5 text-slate-400" />
                  {r.hospital}
                </p>
                <p className="inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-slate-400" />
                  {r.when}
                </p>
              </div>

              <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />
                </button>
                <button className="flex-1 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-700">
                  I can donate
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
