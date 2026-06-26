import { Filter, Search } from "lucide-react";

const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

export default function DonorSearchBar() {
  return (
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
          {bloodGroups.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
        <button className="btn-primary">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>
    </div>
  );
}
