import Image from "next/image";
import { Quote } from "lucide-react";
import { testimonials } from "@/temp/aboutData";

export default function TestimonialsSection() {
  return (
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
                  <p className="text-sm font-semibold text-slate-900">{t.n}</p>
                  <p className="text-xs text-slate-500">{t.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
