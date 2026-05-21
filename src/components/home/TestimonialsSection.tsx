import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sadia Rahman",
    role: "Donor • O+",
    quote:
      "I donated twice through RedDrop. The app reminds me when I'm eligible again. Truly thoughtful.",
  },
  {
    name: "Dr. Imran Hossain",
    role: "Hospital Coordinator",
    quote:
      "Our blood bank's emergency response time dropped by 60% after joining RedDrop.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Volunteer",
    quote:
      "Organizing camps used to be chaotic. Now everything from invites to records is one tap away.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-50/70 py-14 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">
            Loved by donors and hospitals alike
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="card">
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-700 sm:text-base">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-100 font-semibold text-brand-700">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="truncate text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
