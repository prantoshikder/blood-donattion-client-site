import Image from "next/image";
import { stats } from "@/temp/aboutData";

export default function OurStorySection() {
  return (
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
  );
}
