import { ArrowRight, Clock } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Create your account",
    desc: "Sign up as a donor, receiver, volunteer, or hospital in less than a minute.",
  },
  {
    n: "02",
    title: "Find or request blood",
    desc: "Search by blood type or post an urgent request — we route it to the nearest matches.",
  },
  {
    n: "03",
    title: "Connect & save a life",
    desc: "Chat, arrange a meet at a hospital, and donate. Track every life you helped save.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-rose-50/70 to-white py-14 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <Clock className="h-3.5 w-3.5" />
            How it works
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Save a life in 3 simple steps
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="card h-full sm:p-8">
                <span className="text-4xl font-extrabold text-brand-200 sm:text-5xl">
                  {s.n}
                </span>
                <h3 className="mt-3 text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-brand-300 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
