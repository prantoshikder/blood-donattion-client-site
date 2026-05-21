import { Award, Globe2, HeartHandshake, Sparkles, Target, Users } from "lucide-react";
import SiteShell from "@/components/SiteShell";

const team = [
  { n: "Sadia Rahman", r: "Founder & CEO" },
  { n: "Tanvir Ahmed", r: "Head of Operations" },
  { n: "Dr. Imran Hossain", r: "Medical Advisor" },
  { n: "Nusrat Jahan", r: "Community Lead" },
];

const values = [
  { i: HeartHandshake, t: "Compassion first", d: "Every line of code, every flow, is built around the people who give and receive blood." },
  { i: Sparkles, t: "Modern by design", d: "Beautiful interfaces and frictionless flows that work for everyone, everywhere." },
  { i: Globe2, t: "Open and inclusive", d: "Free to use, accessible to all, and designed to scale across borders and languages." },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-rose-50/70 to-white py-12 sm:py-20">
        <div className="absolute -right-32 top-10 -z-10 h-64 w-64 rounded-full bg-brand-100 blur-3xl sm:h-96 sm:w-96" />
        <div className="section text-center">
          <span className="badge">
            <Target className="h-3.5 w-3.5" />
            Our mission
          </span>
          <h1 className="heading-1 mx-auto mt-4 max-w-3xl text-balance sm:mt-5">
            Connecting hearts.
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
              One drop at a time.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:mt-6 sm:text-lg">
            We're on a mission to make blood donation as effortless as sending a
            message — so that no patient ever waits when seconds matter.
          </p>
        </div>
      </section>

      <section className="section py-12 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-200 via-rose-200 to-amber-100 p-1">
            <div className="grid h-full w-full place-items-center rounded-[22px] bg-white/40 backdrop-blur">
              <HeartHandshake className="h-20 w-20 text-brand-600/70 sm:h-32 sm:w-32" />
            </div>
          </div>
          <div>
            <h2 className="heading-2">Our story</h2>
            <p className="mt-4 text-slate-600">
              RedDrop began as a single emergency post in a small WhatsApp group
              — and ended up saving a life that same night. We realized this
              shouldn't take a miracle. So we built a platform that puts the
              right donor, in the right place, at the right time — every time.
            </p>
            <p className="mt-4 text-slate-600">
              Today, our network spans cities across Bangladesh, and we're just
              getting started. Whether you give blood, need it, or organize
              drives, RedDrop is built for you.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              {[
                { k: "12.4K+", v: "Active donors", i: Users },
                { k: "38K+", v: "Lives saved", i: HeartHandshake },
                { k: "640+", v: "Hospitals", i: Award },
                { k: "60+", v: "Cities", i: Globe2 },
              ].map((s) => (
                <div key={s.v} className="card">
                  <s.i className="h-5 w-5 text-brand-600" />
                  <p className="mt-3 text-2xl font-bold text-slate-900">{s.k}</p>
                  <p className="text-xs text-slate-500">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50/70 py-12 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-balance">What we stand for</h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              Three values guide every product decision we make.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.t} className="card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-rose-600 text-white shadow-md">
                  <v.i className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{v.t}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">Meet the team</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            A small, passionate group on a very big mission.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.n} className="card text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-rose-600 text-2xl font-bold text-white shadow-lg">
                {m.n.split(" ").map((p) => p[0]).join("").slice(0, 2)}
              </div>
              <p className="mt-4 font-semibold text-slate-900">{m.n}</p>
              <p className="text-sm text-slate-500">{m.r}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
