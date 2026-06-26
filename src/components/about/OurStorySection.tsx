import { stats } from "@/temp/aboutData";
import { HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function OurStorySection() {
  return (
    <section className="section py-12 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="relative">
          {/* Soft gradient glow behind the image */}
          <div className="absolute -inset-4 -z-10 rounded-4xl bg-linear-to-br from-brand-200/50 via-rose-200/40 to-amber-100/40 blur-2xl" />

          <div className="aspect-4/3 overflow-hidden rounded-3xl shadow-2xl shadow-brand-200/40 ring-1 ring-slate-200/70">
            <Image
              src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&h=675&fit=crop"
              alt="Blood donation volunteers"
              width={900}
              height={675}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating live-status chip */}
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-xl backdrop-blur sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">24/7 active</p>
              <p className="text-xs text-slate-500">Emergency network</p>
            </div>
          </div>
        </div>

        <div>
          <span className="badge">
            <HeartHandshake className="h-3.5 w-3.5" />
            Our story
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Built from a single life saved
          </h2>
          <p className="mt-4 text-slate-600">
            RedDrop began as a single emergency post in a small WhatsApp group —
            and ended up saving a life that same night. We realized this
            shouldn't take a miracle. So we built a platform that puts the right
            donor, in the right place, at the right time — every time.
          </p>
          <p className="mt-4 text-slate-600">
            Today, our network spans cities across Bangladesh, and we're just
            getting started. Whether you give blood, need it, or organize
            drives, RedDrop is built for you.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                  <s.i className="h-5 w-5" />
                </div>
                <p className="mt-3 text-2xl font-bold text-slate-900">{s.k}</p>
                <p className="text-xs text-slate-500">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
