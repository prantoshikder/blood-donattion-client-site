import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/temp/homeData";

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
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                />
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
