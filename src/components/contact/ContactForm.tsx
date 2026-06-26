import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="card lg:col-span-3">
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
        Send us a message
      </h2>
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
            <input
              type="email"
              className="input"
              placeholder="you@example.com"
            />
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
  );
}
