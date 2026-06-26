import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { hours } from "@/temp/contactData";

export default function ContactLocationSection() {
  return (
    <section className="section py-10 sm:py-16">
      <div className="grid items-center gap-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-2">
        <div className="relative aspect-4/3 w-full lg:aspect-auto lg:h-full lg:min-h-80">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=700&fit=crop"
            alt="RedDrop headquarters in Dhaka"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <span className="badge">
            <MapPin className="h-3.5 w-3.5" />
            Our office
          </span>
          <h2 className="heading-3 mt-4">Come say hello</h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            House 42, Road 12, Dhanmondi, Dhaka 1209, Bangladesh. We're right in
            the heart of the city — drop by during working hours.
          </p>

          <div className="mt-6 space-y-2">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Clock className="h-4 w-4 text-brand-600" />
              Working hours
            </p>
            {hours.map((h) => (
              <div
                key={h.d}
                className="flex items-center justify-between border-b border-slate-100 py-1.5 text-sm last:border-0"
              >
                <span className="text-slate-600">{h.d}</span>
                <span className="font-medium text-slate-900">{h.h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
