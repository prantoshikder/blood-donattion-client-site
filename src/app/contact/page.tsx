import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import SiteShell from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="bg-gradient-to-br from-brand-50 via-rose-50/70 to-white">
        <div className="section py-10 text-center sm:py-16">
          <span className="badge">
            <MessageSquare className="h-3.5 w-3.5" />
            We'd love to hear from you
          </span>
          <h1 className="heading-1 mx-auto mt-4 max-w-3xl text-balance">
            Get in touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600 sm:text-base">
            Whether you're a donor, hospital, or just curious — drop us a line
            and we'll get back within a day.
          </p>
        </div>
      </section>

      <section className="section py-10 sm:py-16">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-5">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-2 lg:grid-cols-1">
            {[
              { i: Mail, t: "Email us", v: "support@reddrop.app", d: "We reply within 24 hours" },
              { i: Phone, t: "Call us", v: "+880 1700 000 000", d: "Mon–Sat, 9am – 8pm" },
              { i: MapPin, t: "Visit us", v: "Dhanmondi, Dhaka", d: "Bangladesh HQ" },
            ].map((c) => (
              <div key={c.t} className="card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-rose-600 text-white shadow-md sm:h-12 sm:w-12">
                  <c.i className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <p className="mt-3 text-xs uppercase tracking-wider text-slate-500 sm:mt-4">
                  {c.t}
                </p>
                <p className="mt-1 break-words text-base font-semibold text-slate-900 sm:text-lg">{c.v}</p>
                <p className="text-xs text-slate-500 sm:text-sm">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="card lg:col-span-3">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-500">
              Fill the form and we'll get back as soon as we can.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Full name</label>
                  <input className="input" placeholder="Sadia Rahman" />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="you@example.com" />
                </div>
              </div>

              <div>
                <label className="label">Subject</label>
                <input className="input" placeholder="How can we help?" />
              </div>

              <div>
                <label className="label">Message</label>
                <textarea
                  rows={6}
                  className="input"
                  placeholder="Write your message here…"
                />
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  By submitting, you agree to our privacy policy.
                </p>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
