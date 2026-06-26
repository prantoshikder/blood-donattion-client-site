import {
  Apple,
  ArrowRight,
  Droplet,
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { companyLinks, platformLinks, resourceLinks } from "@/temp/layoutData";

type IconProps = { className?: string };

const FacebookIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.86.24-1.45 1.48-1.45H16.5V4.46c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.9V10.5H8v3h2.44V21h3.06z" />
  </svg>
);

const TwitterIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.53 3H20.5l-6.49 7.42L21.75 21h-6.03l-4.72-6.17L5.55 21H2.58l6.94-7.93L2.25 3h6.18l4.27 5.64L17.53 3zm-1.06 16.2h1.65L7.61 4.7H5.84l10.63 14.5z" />
  </svg>
);

const InstagramIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V22H7.72V8z" />
  </svg>
);

const YoutubeIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.5 6.2c-.27-1.03-1.08-1.84-2.1-2.12C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.48C1.58 4.36.77 5.17.5 6.2 0 8.1 0 12 0 12s0 3.9.5 5.8c.27 1.03 1.08 1.84 2.1 2.12 1.9.48 9.4.48 9.4.48s7.5 0 9.4-.48c1.02-.28 1.83-1.09 2.1-2.12.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.27 3.6L9.6 15.6z" />
  </svg>
);

const socials = [
  { href: "#", icon: FacebookIcon, label: "Facebook" },
  { href: "#", icon: TwitterIcon, label: "Twitter" },
  { href: "#", icon: InstagramIcon, label: "Instagram" },
  { href: "#", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "#", icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-rose-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

      {/* Newsletter band */}
      <div className="relative border-b border-white/5">
        <div className="section grid items-center gap-8 py-12 md:grid-cols-2 md:gap-12 md:py-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-rose-200">
              <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
              Stay in the loop
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Get monthly stories of lives saved
            </h3>
            <p className="mt-3 max-w-md text-sm text-slate-400">
              Donation drives, donor spotlights, and updates straight to your
              inbox. No spam, ever — unsubscribe with one click.
            </p>
          </div>
          <form className="w-full">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-rose-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rose-400/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-linear-to-r from-brand-600 to-rose-500 px-6 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl hover:shadow-brand-500/50 active:scale-95"
              >
                Subscribe
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              We respect your privacy. Read our{" "}
              <Link
                href="/privacy"
                className="underline-offset-2 hover:text-white hover:underline"
              >
                policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative">
        <div className="section grid gap-10 py-14 sm:grid-cols-2 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="rounded-2xl bg-white/95 p-3 inline-block">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A modern blood donation platform connecting donors, hospitals, and
              volunteers — so the right blood reaches the right person, at the
              right time.
            </p>

            {/* Mini stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { k: "12.4K", v: "Donors" },
                { k: "640+", v: "Hospitals" },
                { k: "38K+", v: "Lives saved" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur"
                >
                  <p className="text-lg font-extrabold text-white">{s.k}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{s.v}</p>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-rose-400/50 hover:bg-rose-500/10 hover:text-white active:scale-95"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {platformLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {resourceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1 text-slate-400 transition hover:text-white"
                  >
                    {l.label}
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + App */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:support@reddrop.app"
                  className="flex items-start gap-2 text-slate-400 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                  <span className="break-all">support@reddrop.app</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801700000000"
                  className="flex items-start gap-2 text-slate-400 transition hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                  +880 1700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                Dhaka, Bangladesh
              </li>
            </ul>

            {/* Emergency hotline */}
            <div className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-rose-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
                </span>
                24/7 Emergency
              </p>
              <a
                href="tel:999"
                className="mt-1 block text-2xl font-extrabold text-white"
              >
                999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* App download row */}
      <div className="relative border-t border-white/5">
        <div className="section flex flex-col items-start justify-between gap-5 py-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-rose-500 shadow-lg">
              <Droplet className="h-6 w-6 fill-white text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Get the RedDrop app
              </p>
              <p className="text-xs text-slate-400">
                Respond to emergencies in one tap
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
            <a
              href="#"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 text-white transition hover:bg-white/10 md:flex-none"
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Download on
                </p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 text-white transition hover:bg-white/10 md:flex-none"
            >
              <Smartphone className="h-6 w-6" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-wider text-slate-400">
                  Get it on
                </p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5">
        <div className="section flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} RedDrop. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
          <p className="flex items-center gap-1.5">
            Made with
            <Heart className="h-3.5 w-3.5 fill-rose-400 text-rose-400" />
            to save lives
          </p>
        </div>
      </div>
    </footer>
  );
}
