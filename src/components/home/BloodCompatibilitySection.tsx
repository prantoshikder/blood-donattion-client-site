import { Droplet, ArrowRight } from "lucide-react";

const compatibility = [
  { type: "O−", donateTo: "Everyone", receiveFrom: "O−", tag: "Universal donor", color: "from-rose-500 to-rose-600" },
  { type: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O+, O−", tag: "Most common", color: "from-rose-400 to-rose-500" },
  { type: "A−", donateTo: "A±, AB±", receiveFrom: "A−, O−", tag: "Rare", color: "from-amber-500 to-orange-500" },
  { type: "A+", donateTo: "A+, AB+", receiveFrom: "A±, O±", tag: "Common", color: "from-amber-400 to-amber-500" },
  { type: "B−", donateTo: "B±, AB±", receiveFrom: "B−, O−", tag: "Rare", color: "from-emerald-500 to-teal-600" },
  { type: "B+", donateTo: "B+, AB+", receiveFrom: "B±, O±", tag: "Common", color: "from-emerald-400 to-emerald-500" },
  { type: "AB−", donateTo: "AB±", receiveFrom: "A−, B−, AB−, O−", tag: "Rare", color: "from-violet-500 to-indigo-600" },
  { type: "AB+", donateTo: "AB+", receiveFrom: "Everyone", tag: "Universal receiver", color: "from-violet-400 to-purple-500" },
];

export default function BloodCompatibilitySection() {
  return (
    <section className="bg-slate-50/70 py-14 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Droplet className="h-3.5 w-3.5" />
            Blood compatibility
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Know your type, save the right life
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Quick reference for who can donate to whom and who can receive from
            whom.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {compatibility.map((c) => (
            <div key={c.type} className="card group">
              <div className="flex items-center justify-between">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-md`}
                >
                  <span className="text-lg font-extrabold">{c.type}</span>
                </div>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                  {c.tag}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Donate to</p>
                    <p className="font-medium text-slate-900">{c.donateTo}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 rotate-180 text-sky-600" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">Receive from</p>
                    <p className="font-medium text-slate-900">{c.receiveFrom}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
