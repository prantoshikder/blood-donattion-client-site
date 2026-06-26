import { dashboardDonors as donors } from "@/temp/dashboardData";
import { Droplet, Filter, MapPin, Phone, Search, Star } from "lucide-react";

export default function DonorsPage() {
  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Find Donors
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Search verified donors near you by blood group and location.
        </p>
      </div>

      <div className="card">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr,160px,160px,auto]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search name, hospital, city…"
              className="input pl-10"
            />
          </div>
          <select className="input">
            <option>All blood groups</option>
            {["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"].map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <select className="input">
            <option>All cities</option>
            <option>Dhaka</option>
            <option>Chattogram</option>
            <option>Sylhet</option>
          </select>
          <button className="btn-primary">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {donors.map((d) => (
          <div key={d.name} className="card">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-rose-600 font-semibold text-white">
                  {d.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
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
              <div className="rounded-lg bg-brand-50 p-2.5">
                <p className="text-brand-700 font-semibold">{d.blood}</p>
                <p className="text-[10px] uppercase tracking-wider text-brand-600/80">
                  Blood
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-2.5">
                <p className="font-semibold text-slate-700">{d.city}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500">
                  City
                </p>
              </div>
            </div>

            <p className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
              <Droplet className="h-3 w-3" />
              Last donation {d.last}
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
    </div>
  );
}
