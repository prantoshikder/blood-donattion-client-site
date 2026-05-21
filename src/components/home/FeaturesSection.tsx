import {
  Search,
  Bell,
  ShieldCheck,
  Activity,
  Hospital,
  HeartHandshake,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Find Donors Instantly",
    desc: "Search by blood group, city, or hospital and reach verified donors in seconds.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    desc: "Broadcast urgent requests and notify nearby donors automatically.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    desc: "Every donor and hospital is verified to keep the network safe and trustworthy.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Activity,
    title: "Donation History",
    desc: "Track every donation, eligibility, and next safe donation date in one place.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Hospital,
    title: "Hospital Network",
    desc: "Hospitals and blood banks can manage inventory and request directly from donors.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Hub",
    desc: "Volunteers organize camps, manage requests, and grow the donor community.",
    color: "from-pink-500 to-fuchsia-600",
  },
];

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
              className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-md transition group-hover:scale-105`}
            >
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
