import {
  AlertCircle,
  Calendar,
  Hospital,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import type { BloodRequest } from "../../temp/requestData";

export default function RequestCard({ request: r }: { request: BloodRequest }) {
  return (
    <div className="card group">
      <div className="flex items-start justify-between">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-rose-600 text-lg font-bold text-white shadow-md">
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

      <div className="mt-4 flex items-center gap-3">
        <Image
          src={r.image}
          alt={r.name}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm"
        />
        <div>
          <p className="font-semibold text-slate-900">{r.name}</p>
          <p className="text-xs text-slate-500">{r.reason}</p>
        </div>
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
  );
}
