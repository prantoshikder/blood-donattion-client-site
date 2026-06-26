import Image from "next/image";
import { ArrowRight, Droplet, MapPin, Phone, Star } from "lucide-react";
import type { Donor } from "@/types/donors";

export default function DonorCard({ donor: d }: { donor: Donor }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/60">
      {/* Hover glow accent */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-200/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />

      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={d.image}
              alt={d.name}
              width={56}
              height={56}
              priority
              className="h-14 w-14 rounded-2xl object-cover ring-2 ring-white shadow-md"
            />
            <span
              className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white ${
                d.available ? "bg-emerald-500" : "bg-slate-300"
              }`}
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{d.name}</p>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span className="font-medium text-slate-700">{d.rating}</span>
            </div>
          </div>
        </div>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
            d.available
              ? "bg-emerald-50 text-emerald-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {d.available ? "Available" : "Resting"}
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1 rounded-xl bg-linear-to-br from-brand-500 to-rose-600 px-3 py-1.5 text-sm font-bold text-white shadow-sm shadow-brand-200">
          <Droplet className="h-3.5 w-3.5 fill-white" />
          {d.blood}
        </span>
        <span className="inline-flex items-center gap-1 rounded-xl bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
          <MapPin className="h-3.5 w-3.5 text-slate-400" />
          {d.city}
        </span>
      </div>

      <p className="relative mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
        <Droplet className="h-3 w-3" />
        Last donation {d.last} ago
      </p>

      <div className="relative mt-4 flex gap-2">
        <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
          <Phone className="h-4 w-4" />
        </button>
        <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700">
          <MapPin className="h-4 w-4" />
        </button>
        <button className="group/btn flex flex-1 items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-brand-600 to-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:from-brand-700 hover:to-rose-700">
          Request
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
