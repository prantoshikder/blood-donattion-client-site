import { HelpCircle, ChevronDown } from "lucide-react";
import { faqs } from "@/temp/homeData";

export default function FAQSection() {
  return (
    <section className="bg-slate-50/70 py-14 sm:py-20">
      <div className="section">
        <div className="mx-auto max-w-2xl text-center">
          <span className="badge">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h2 className="heading-2 mt-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Everything you need to know before donating or requesting blood.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition open:shadow-md sm:p-5"
              open={i === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-slate-900 sm:text-base">
                <span>{f.q}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
