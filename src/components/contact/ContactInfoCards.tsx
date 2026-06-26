import { channels } from "@/temp/contactData";

export default function ContactInfoCards() {
  return (
    <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-2 lg:grid-cols-1">
      {channels.map((c) => (
        <div key={c.t} className="card">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-md sm:h-12 sm:w-12">
            <c.i className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <p className="mt-3 text-xs uppercase tracking-wider text-slate-500 sm:mt-4">
            {c.t}
          </p>
          <p className="mt-1 wrap-break-word text-base font-semibold text-slate-900 sm:text-lg">
            {c.v}
          </p>
          <p className="text-xs text-slate-500 sm:text-sm">{c.d}</p>
        </div>
      ))}
    </div>
  );
}
