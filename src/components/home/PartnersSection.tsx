import { Hospital, ShieldCheck } from "lucide-react";

const partners = [
  "Square Hospital",
  "Apollo Hospital",
  "United Hospital",
  "Evercare",
  "Labaid",
  "Ibn Sina",
  "BIRDEM",
  "ICDDR,B",
  "Sandhani",
  "Bangladesh Red Crescent",
  "Quantum Foundation",
  "Badhan",
];

export default function PartnersSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge">
          <ShieldCheck className="h-3.5 w-3.5" />
          Trusted partners
        </span>
        <h2 className="heading-2 mt-4 text-balance">
          Backed by Bangladesh's leading hospitals
        </h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          We work with verified hospitals, blood banks, and humanitarian
          organizations to keep the network safe and reliable.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {partners.map((p) => (
          <div
            key={p}
            className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center text-xs font-semibold text-slate-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-700 sm:text-sm"
          >
            <Hospital className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="truncate">{p}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
