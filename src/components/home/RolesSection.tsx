import { Droplet, HeartHandshake, Users, Hospital } from "lucide-react";

const roles = [
  { t: "Donor", d: "Give blood and track impact", i: Droplet, c: "bg-rose-500" },
  { t: "Receiver", d: "Request blood urgently", i: HeartHandshake, c: "bg-amber-500" },
  { t: "Volunteer", d: "Organize camps & drives", i: Users, c: "bg-emerald-500" },
  { t: "Hospital", d: "Manage inventory", i: Hospital, c: "bg-sky-500" },
];

export default function RolesSection() {
  return (
    <section className="section py-14 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="heading-2 text-balance">Built for every role</h2>
        <p className="mt-4 text-sm text-slate-600 sm:text-base">
          Whether you give, receive, organize, or manage — RedDrop has a
          tailored experience for you.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
        {roles.map((r) => (
          <div key={r.t} className="card group cursor-pointer text-center">
            <div
              className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl sm:h-14 sm:w-14 ${r.c} text-white shadow-lg transition group-hover:scale-110`}
            >
              <r.i className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <h3 className="mt-3 font-semibold text-slate-900 sm:mt-4">{r.t}</h3>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{r.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
