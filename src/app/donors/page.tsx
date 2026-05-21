import { Droplet, Filter, MapPin, Phone, Search, Star } from "lucide-react";
import SiteShell from "@/components/SiteShell";

const donors = [
  { name: "Tanvir Ahmed", blood: "O+", city: "Dhaka", last: "2 months", rating: 4.9, available: true },
  { name: "Nusrat Jahan", blood: "A−", city: "Chattogram", last: "1 month", rating: 4.8, available: true },
  { name: "Imran Hossain", blood: "B+", city: "Sylhet", last: "3 months", rating: 4.7, available: false },
  { name: "Rakib Khan", blood: "AB+", city: "Dhaka", last: "4 months", rating: 4.9, available: true },
  { name: "Mehedi Hasan", blood: "O−", city: "Khulna", last: "5 months", rating: 5.0, available: true },
  { name: "Anika Sultana", blood: "A+", city: "Dhaka", last: "1 month", rating: 4.6, available: false },
  { name: "Sumi Akter", blood: "B−", city: "Rajshahi", last: "2 weeks", rating: 4.8, available: true },
  { name: "Tania Akter", blood: "AB−", city: "Barishal", last: "6 months", rating: 4.7, available: true },
  { name: "Saif Ahmed", blood: "O+", city: "Dhaka", last: "3 weeks", rating: 4.9, available: true },
];

export default function PublicDonorsPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-brand-50 via-rose-50/70 to-white">
        <div className="section py-10 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge">
              <Droplet className="h-3.5 w-3.5" />
              Verified donor network
            </span>
            <h1 className="heading-1 mt-4 text-balance">
              Find a donor near you
            </h1>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Search by blood group, city, or hospital. Reach verified donors in
              just a few taps.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl sm:mt-10">
            <div className="card grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr,180px,auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search by name, hospital, city…"
                  className="input pl-10"
                />
              </div>
              <select className="input">
                <option>All blood groups</option>
                {["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"].map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              <button className="btn-primary">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10 sm:py-16">
        <div className="mb-5 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{donors.length}</span> donors
          </p>
          <select className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 sm:self-auto">
            <option>Sort: Most recent</option>
            <option>Sort: Highest rated</option>
            <option>Sort: Closest</option>
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {donors.map((d) => (
            <div key={d.name} className="card">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-rose-600 font-semibold text-white">
                    {d.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{d.name}</p>
                    <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      {d.rating}
                    </div>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    d.available
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {d.available ? "Available" : "Resting"}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700">
                  <p className="text-sm font-semibold">{d.blood}</p>
                  <p className="text-[10px] uppercase tracking-wider text-brand-600/80">
                    Blood
                  </p>
                </div>
                <div className="rounded-lg bg-slate-50 p-2.5">
                  <p className="text-sm font-semibold text-slate-700">{d.city}</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    City
                  </p>
                </div>
              </div>

              <p className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
                <Droplet className="h-3 w-3" />
                Last donation {d.last} ago
              </p>

              <div className="mt-4 flex gap-2">
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                  <Phone className="h-4 w-4" />
                </button>
                <button className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50">
                  <MapPin className="h-4 w-4" />
                </button>
                <button className="flex-1 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-brand-700">
                  Request
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="btn-outline">Load more donors</button>
        </div>
      </section>
    </SiteShell>
  );
}
