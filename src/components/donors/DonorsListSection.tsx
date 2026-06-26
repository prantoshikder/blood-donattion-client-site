import { ChevronDown, Plus } from "lucide-react";
import { donors } from "@/temp/donorsData";
import DonorCard from "./DonorCard";

export default function DonorsListSection() {
  return (
    <section className="section py-10 sm:py-16">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-slate-600">
            <span className="font-semibold text-slate-900">
              {donors.length}
            </span>{" "}
            donors available
          </span>
        </div>

        <div className="relative self-start sm:self-auto">
          <select className="appearance-none rounded-full border border-slate-200 bg-white py-2 pl-4 pr-9 text-xs font-medium text-slate-600 shadow-sm transition hover:border-brand-300 focus:border-brand-400 focus:outline-none">
            <option>Sort: Most recent</option>
            <option>Sort: Highest rated</option>
            <option>Sort: Closest</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {donors.map((d) => (
          <DonorCard key={d.name} donor={d} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
          Load more donors
          <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
        </button>
      </div>
    </section>
  );
}
