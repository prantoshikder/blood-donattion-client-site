"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  X,
  Droplet,
  MapPin,
  Phone,
  User,
  Hospital,
  Send,
  CheckCircle2,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { bloodGroups } from "@/temp/layoutData";

type Props = {
  open: boolean;
  onClose: () => void;
};

type Status = "idle" | "submitting" | "success";

export default function EmergencyModal({ open, onClose }: Props) {
  const [blood, setBlood] = useState<string | null>(null);
  const [units, setUnits] = useState(1);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setBlood(null);
      setUnits(1);
    }
  }, [open]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!blood || status !== "idle") return;
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1200);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="emergency-title"
      className="fixed inset-0 z-60 flex items-end justify-center sm:items-center sm:p-4"
    >
      {/* Backdrop */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
      />

      {/* Sheet / dialog */}
      <div className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        {/* Header */}
        <div className="relative overflow-hidden bg-linear-to-br from-rose-600 via-brand-600 to-brand-700 px-5 pb-6 pt-5 text-white sm:px-6">
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-amber-300/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_55%)]" />

          <div className="relative flex items-start justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-inset ring-white/15 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Critical alert
            </span>
            <button
              aria-label="Close emergency modal"
              onClick={onClose}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white ring-1 ring-inset ring-white/15 backdrop-blur transition hover:bg-white/25 active:scale-95"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="relative mt-4 flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-inset ring-white/20 backdrop-blur">
              <AlertCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0 pt-0.5">
              <h2
                id="emergency-title"
                className="text-lg font-bold leading-snug sm:text-xl"
              >
                Post an emergency request
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-white/85 sm:text-sm">
                Nearby verified donors will be notified instantly.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {status === "success" ? (
            <div className="py-6 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Request broadcast!
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We've notified{" "}
                <span className="font-semibold text-brand-700">
                  142 nearby {blood} donors
                </span>
                . You'll receive a call within minutes.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  What's next?
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    Track responses in your dashboard
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    Donors will call you directly
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    Call 999 if no response in 10 minutes
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/dashboard"
                  onClick={onClose}
                  className="btn-primary w-full"
                >
                  Open dashboard
                </Link>
                <button onClick={onClose} className="btn-outline w-full">
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hotline */}
              <a
                href="tel:999"
                className="flex items-center justify-between gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-3.5 transition hover:bg-rose-100"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-rose-600 text-white shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-rose-700">
                      24/7 Hotline
                    </p>
                    <p className="text-base font-bold text-slate-900">
                      Call 999 instantly
                    </p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-rose-400" />
              </a>

              {/* Blood group */}
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Blood group needed
                  <span className="text-rose-600">*</span>
                </label>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {bloodGroups.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBlood(b)}
                      className={`flex items-center justify-center gap-1 rounded-xl border py-2.5 text-sm font-semibold transition active:scale-95 ${
                        blood === b
                          ? "border-brand-600 bg-brand-600 text-white shadow-md"
                          : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50"
                      }`}
                    >
                      {blood === b && <Droplet className="h-3.5 w-3.5 fill-white" />}
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Units */}
              <div>
                <label className="text-sm font-semibold text-slate-900">
                  Units required
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-1.5">
                  <button
                    type="button"
                    onClick={() => setUnits((u) => Math.max(1, u - 1))}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg font-bold text-slate-700 shadow-sm active:scale-95"
                  >
                    −
                  </button>
                  <p className="flex-1 text-center text-base font-semibold text-slate-900">
                    {units} {units === 1 ? "unit" : "units"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setUnits((u) => Math.min(10, u + 1))}
                    className="grid h-9 w-9 place-items-center rounded-lg bg-white text-lg font-bold text-slate-700 shadow-sm active:scale-95"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Patient */}
              <div>
                <label
                  htmlFor="patient"
                  className="text-sm font-semibold text-slate-900"
                >
                  Patient name
                </label>
                <div className="relative mt-2">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="patient"
                    type="text"
                    required
                    placeholder="e.g. Aman Khan"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              {/* Hospital */}
              <div>
                <label
                  htmlFor="hospital"
                  className="text-sm font-semibold text-slate-900"
                >
                  Hospital / Location
                </label>
                <div className="relative mt-2">
                  <Hospital className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="hospital"
                    type="text"
                    required
                    placeholder="e.g. Square Hospital, Dhaka"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              {/* Contact */}
              <div>
                <label
                  htmlFor="contact"
                  className="text-sm font-semibold text-slate-900"
                >
                  Contact number
                </label>
                <div className="relative mt-2">
                  <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    id="contact"
                    type="tel"
                    required
                    placeholder="+880 1700 000 000"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  />
                </div>
              </div>

              {/* Reach radius indicator */}
              <div className="flex items-center gap-3 rounded-2xl bg-brand-50 p-3.5 text-sm text-brand-800">
                <MapPin className="h-5 w-5 shrink-0 text-brand-600" />
                <p>
                  We'll alert{" "}
                  <span className="font-bold">142 verified donors</span> within
                  10 km of your location.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!blood || status !== "idle"}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand-600 to-rose-500 px-6 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:shadow-xl hover:shadow-brand-500/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-lg"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Broadcasting to donors…
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    Broadcast emergency request
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-500">
                By submitting, you agree to our{" "}
                <Link
                  href="/terms"
                  className="font-medium text-brand-700 hover:underline"
                >
                  emergency request terms
                </Link>
                .
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
