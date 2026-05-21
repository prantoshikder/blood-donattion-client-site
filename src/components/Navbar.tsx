"use client";

import {
  AlertCircle,
  ArrowRight,
  Bell,
  ChevronRight,
  Droplet,
  Home,
  Info,
  LogIn,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import EmergencyModal from "./EmergencyModal";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/donors", label: "Find Donors", icon: Search },
  { href: "/requests", label: "Blood Requests", icon: Droplet },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const pathname = usePathname();

  const openEmergency = () => {
    setEmergencyOpen(true);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="hidden bg-linear-to-r from-brand-700 via-rose-600 to-brand-700 text-white sm:block">
        <div className="section flex h-9 items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-medium">3 urgent requests near you</span>
            <Link
              href="/requests"
              className="hidden items-center gap-1 text-white/90 underline-offset-4 hover:text-white hover:underline md:inline-flex"
            >
              See all <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <a
              href="tel:999"
              className="hidden items-center gap-1.5 hover:text-white md:inline-flex"
            >
              <Phone className="h-3 w-3" />
              24/7 Emergency: 999
            </a>
            <Link href="/help" className="hover:text-white">
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
            : "border-b border-transparent bg-white/60 backdrop-blur-md"
        }`}
      >
        <nav
          className={`section flex items-center justify-between gap-3 transition-all duration-300 ${
            scrolled ? "h-14" : "h-16"
          }`}
        >
          <Link href="/" className="shrink-0 transition active:scale-95">
            <Logo />
          </Link>

          {/* Desktop nav pill */}
          <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/70 p-1 shadow-sm backdrop-blur lg:flex">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-linear-to-r from-brand-600 to-rose-500 text-white shadow-md shadow-brand-500/25"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={openEmergency}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 ring-1 ring-inset ring-rose-200 transition hover:bg-rose-100 active:scale-95"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-600" />
              </span>
              Emergency
            </button>
            <Link
              href="/notifications"
              aria-label="Notifications"
              className="relative grid h-10 w-10 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
            </Link>
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-brand-600 to-rose-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-500/25 transition hover:shadow-lg hover:shadow-brand-500/40 active:scale-95"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={openEmergency}
              aria-label="Emergency"
              className="relative grid h-11 w-11 place-items-center rounded-xl bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200 transition active:scale-95"
            >
              <AlertCircle className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-600 ring-2 ring-white" />
              </span>
            </button>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition active:scale-95"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <Logo />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
            <p className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Navigate
            </p>
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-medium transition ${
                    active
                      ? "bg-linear-to-r from-brand-50 to-rose-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`grid h-9 w-9 place-items-center rounded-xl transition ${
                      active
                        ? "bg-white text-brand-600 shadow-sm"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <l.icon className="h-4 w-4" />
                  </div>
                  <span className="flex-1">{l.label}</span>
                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </Link>
              );
            })}

            <p className="mt-4 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Quick actions
            </p>
            <button
              type="button"
              onClick={openEmergency}
              className="flex w-full items-center gap-3 rounded-2xl bg-linear-to-r from-rose-50 to-amber-50 px-3 py-3 text-left text-base font-semibold text-rose-700 active:scale-[0.99]"
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-rose-600 shadow-sm">
                <AlertCircle className="h-4 w-4" />
              </div>
              Post emergency request
              <ChevronRight className="ml-auto h-4 w-4 text-rose-400" />
            </button>
            <Link
              href="/notifications"
              className="flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-600">
                <Bell className="h-4 w-4" />
              </div>
              Notifications
              <span className="ml-auto rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                3
              </span>
            </Link>
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login"
                className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <LogIn className="h-4 w-4" />
                Log in
              </Link>
              <Link
                href="/signup"
                className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-linear-to-r from-brand-600 to-rose-500 px-4 text-sm font-semibold text-white shadow-md shadow-brand-500/25"
              >
                Sign up
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-3 text-center text-xs text-slate-500">
              24/7 Emergency:{" "}
              <a href="tel:999" className="font-semibold text-brand-700">
                999
              </a>
            </p>
          </div>
        </aside>
      </div>

      <EmergencyModal
        open={emergencyOpen}
        onClose={() => setEmergencyOpen(false)}
      />
    </>
  );
}
