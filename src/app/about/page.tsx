import SiteShell from "@/components/SiteShell";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Globe2,
  Heart,
  HeartHandshake,
  Quote,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

const team = [
  {
    n: "Sadia Rahman",
    r: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=240&h=240&fit=crop&crop=faces",
  },
  {
    n: "Tanvir Ahmed",
    r: "Head of Operations",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=240&h=240&fit=crop&crop=faces",
  },
  {
    n: "Dr. Imran Hossain",
    r: "Medical Advisor",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=240&h=240&fit=crop&crop=faces",
  },
  {
    n: "Nusrat Jahan",
    r: "Community Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&crop=faces",
  },
];

const values = [
  {
    i: HeartHandshake,
    t: "Compassion first",
    d: "Every line of code, every flow, is built around the people who give and receive blood.",
  },
  {
    i: Sparkles,
    t: "Modern by design",
    d: "Beautiful interfaces and frictionless flows that work for everyone, everywhere.",
  },
  {
    i: Globe2,
    t: "Open and inclusive",
    d: "Free to use, accessible to all, and designed to scale across borders and languages.",
  },
];

const journey = [
  {
    y: "2021",
    t: "The first request",
    d: "A single emergency post in a WhatsApp group saved a life overnight — and sparked an idea.",
  },
  {
    y: "2022",
    t: "RedDrop is born",
    d: "We launched our first app, connecting 500 donors across Dhaka in the first month.",
  },
  {
    y: "2023",
    t: "Going nationwide",
    d: "Expanded to 60+ cities and partnered with 640+ hospitals across Bangladesh.",
  },
  {
    y: "2024",
    t: "38K lives and counting",
    d: "Crossed 12,400 active donors and 38,000 lives touched — just getting started.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&h=600&fit=crop",
];

const testimonials = [
  {
    q: "I needed O− blood at 2am for my mother. RedDrop found a donor in 11 minutes. I'll never forget it.",
    n: "Farhana Akter",
    r: "Recipient's daughter, Dhaka",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=faces",
  },
  {
    q: "Donating used to mean phone calls and waiting. Now I get a request, tap once, and I'm helping someone nearby.",
    n: "Rakib Khan",
    r: "Donor since 2022, Chattogram",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  },
  {
    q: "As a hospital, RedDrop cut our emergency sourcing time in half. It's become part of how we operate.",
    n: "Dr. Sharmin Sultana",
    r: "Blood Bank Lead, Sylhet",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=faces",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-rose-50/70 to-white py-12 sm:py-20">
        <div className="absolute -right-32 top-10 -z-10 h-64 w-64 rounded-full bg-brand-100 blur-3xl sm:h-96 sm:w-96" />
        <div className="section text-center">
          <span className="badge">
            <Target className="h-3.5 w-3.5" />
            Our mission
          </span>
          <h1 className="heading-1 mx-auto mt-4 max-w-3xl text-balance sm:mt-5">
            Connecting hearts.
            <br />
            <span className="bg-linear-to-r from-brand-600 to-rose-500 bg-clip-text text-transparent">
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
          <div className="aspect-4/3 overflow-hidden rounded-3xl bg-linear-to-br from-brand-200 via-rose-200 to-amber-100 p-1">
            <Image
              src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&h=675&fit=crop"
              alt="Blood donation volunteers"
              width={900}
              height={675}
              priority
              className="h-full w-full rounded-[22px] object-cover"
            />
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
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    {s.k}
                  </p>
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
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-md">
                  <v.i className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {v.t}
                </h3>
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
              <Image
                src={m.img}
                alt={m.n}
                width={80}
                height={80}
                className="mx-auto h-20 w-20 rounded-2xl object-cover shadow-lg"
              />
              <p className="mt-4 font-semibold text-slate-900">{m.n}</p>
              <p className="text-sm text-slate-500">{m.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/70 py-12 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge">
              <Sparkles className="h-3.5 w-3.5" />
              Our journey
            </span>
            <h2 className="heading-2 mt-4 text-balance">
              From one request to a movement
            </h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              A few milestones from the road so far.
            </p>
          </div>

          <div className="relative mx-auto mt-10 max-w-3xl sm:mt-14">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-brand-200 sm:left-1/2" />
            <div className="space-y-8 sm:space-y-12">
              {journey.map((j, idx) => (
                <div
                  key={j.y}
                  className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:items-center sm:pl-0 ${
                    idx % 2 === 1 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <span className="absolute left-1.5 top-1.5 h-5 w-5 rounded-full border-4 border-white bg-brand-600 shadow sm:left-1/2 sm:-translate-x-1/2" />
                  <div className="sm:w-1/2 sm:px-8">
                    <div className="card">
                      <p className="text-sm font-bold text-brand-600">{j.y}</p>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {j.t}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{j.d}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2 text-balance">Moments that matter</h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Real donors, real drives, real impact.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
          {gallery.map((src, idx) => (
            <div
              key={src}
              className="aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={src}
                alt={`Blood donation moment ${idx + 1}`}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50/70 py-12 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2 text-balance">Stories from our community</h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              The people we serve say it best.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.n} className="card flex flex-col">
                <Quote className="h-7 w-7 text-brand-200" />
                <p className="mt-3 flex-1 text-sm text-slate-600">{t.q}</p>
                <div className="mt-5 flex items-center gap-3">
                  <Image
                    src={t.img}
                    alt={t.n}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {t.n}
                    </p>
                    <p className="text-xs text-slate-500">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-12 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 to-rose-600 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="relative mx-auto max-w-2xl">
            <Heart className="mx-auto h-10 w-10 text-white" />
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Your blood can be someone's tomorrow
            </h2>
            <p className="mt-4 text-sm text-white/90 sm:text-base">
              Join thousands of donors making life-saving connections every day.
              It only takes a minute to sign up.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50"
              >
                Become a donor
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/donors"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Find a donor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
