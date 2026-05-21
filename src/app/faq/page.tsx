"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SiteShell from "@/components/SiteShell";

const faqs = [
  { q: "Who can donate blood?", a: "Anyone between 18–60 years old, weighing at least 50kg, and in good health can typically donate. Donors should not have donated within the past 90 days." },
  { q: "Is RedDrop free to use?", a: "Yes — RedDrop is 100% free for donors, receivers, and volunteers. Hospitals can choose optional premium tools for inventory management." },
  { q: "How are donors verified?", a: "We verify donors via phone, optional ID upload, and partner hospital cross-checks. Verified profiles get a badge in search results." },
  { q: "How quickly will I find a match?", a: "Emergency requests are routed to compatible donors within minutes. Most urgent requests find a match in under 30 minutes in major cities." },
  { q: "What if I'm not eligible to donate yet?", a: "No problem — you can still volunteer, share requests with friends, or organize a camp. Every contribution counts." },
  { q: "How is my data protected?", a: "Your data is encrypted in transit and at rest. Contact information is only shared after you explicitly accept a request." },
  { q: "Can hospitals join the platform?", a: "Absolutely. Hospitals and blood banks get a dedicated dashboard to manage inventory, post requests, and connect with donors." },
  { q: "How do I delete my account?", a: "Open Settings → Privacy → Delete account. Your data is permanently removed within 30 days." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-brand-50 via-rose-50/70 to-white">
        <div className="section py-10 text-center sm:py-16">
          <span className="badge">
            <HelpCircle className="h-3.5 w-3.5" />
            FAQ
          </span>
          <h1 className="heading-1 mx-auto mt-4 max-w-3xl text-balance">
            Questions, answered
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            Everything you need to know about donating, receiving, and using
            RedDrop.
          </p>
        </div>
      </section>

      <section className="section py-10 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="card overflow-hidden !p-0">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-slate-50/50 sm:p-6"
              >
                <span className="text-sm font-semibold text-slate-900 sm:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-slate-400 transition ${
                    open === i ? "rotate-180 text-brand-600" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="border-t border-slate-100 px-4 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
