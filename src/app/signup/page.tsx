"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Droplet,
  HeartHandshake,
  Hospital,
  Mail,
  Lock,
  User,
  Phone,
  ShieldCheck,
  Users,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";

type Role = "donor" | "receiver" | "volunteer" | "hospital" | "admin";

const roles: {
  key: Role;
  title: string;
  desc: string;
  icon: typeof Droplet;
  color: string;
}[] = [
  {
    key: "donor",
    title: "Donor",
    desc: "I want to donate blood and help others",
    icon: Droplet,
    color: "from-rose-500 to-rose-600",
  },
  {
    key: "receiver",
    title: "Receiver",
    desc: "I or my family needs blood",
    icon: HeartHandshake,
    color: "from-amber-500 to-orange-600",
  },
  {
    key: "volunteer",
    title: "Volunteer",
    desc: "I want to organize camps & drives",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
  {
    key: "hospital",
    title: "Hospital / Blood Bank",
    desc: "Manage inventory & requests",
    icon: Hospital,
    color: "from-sky-500 to-blue-600",
  },
  {
    key: "admin",
    title: "Admin",
    desc: "Manage platform operations",
    icon: ShieldCheck,
    color: "from-violet-500 to-indigo-600",
  },
];

const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

export default function SignupPage() {
  const [role, setRole] = useState<Role>("donor");
  const [step, setStep] = useState<1 | 2>(1);
  const [show, setShow] = useState(false);

  const showBloodGroup = role === "donor" || role === "receiver";
  const showOrgFields = role === "hospital";

  return (
    <AuthShell
      title="Join RedDrop"
      subtitle="Create your account and pick the role that fits you best."
    >
      {/* Stepper */}
      <div className="mb-6 flex items-center gap-2 sm:gap-3">
        {[1, 2].map((n) => (
          <div key={n} className="flex flex-1 items-center gap-2 sm:gap-3">
            <div
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold transition ${
                step >= n
                  ? "bg-brand-600 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {step > n ? <CheckCircle2 className="h-4 w-4" /> : n}
            </div>
            <span
              className={`whitespace-nowrap text-xs font-medium ${
                step >= n ? "text-slate-900" : "text-slate-400"
              }`}
            >
              {n === 1 ? "Choose role" : "Your details"}
            </span>
            {n < 2 && <div className="h-px flex-1 bg-slate-200" />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="space-y-3">
          {roles.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setRole(r.key)}
              className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition active:scale-[0.99] sm:gap-4 sm:p-4 ${
                role === r.key
                  ? "border-brand-500 bg-brand-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.color} text-white shadow-md sm:h-11 sm:w-11`}
              >
                <r.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">{r.title}</p>
                <p className="truncate text-xs text-slate-500">{r.desc}</p>
              </div>
              <div
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${
                  role === r.key
                    ? "border-brand-600 bg-brand-600"
                    : "border-slate-300"
                }`}
              >
                {role === r.key && (
                  <div className="h-2 w-2 rounded-full bg-white" />
                )}
              </div>
            </button>
          ))}

          <button
            type="button"
            onClick={() => setStep(2)}
            className="btn-primary mt-3 w-full !py-3.5"
          >
            Continue
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="pt-2 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          {showOrgFields ? (
            <div>
              <label className="label">Organization name</label>
              <div className="relative">
                <Hospital className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  className="input pl-10"
                  placeholder="Square Hospital Ltd."
                  required
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">First name</label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input className="input pl-10" placeholder="Sadia" required />
                </div>
              </div>
              <div>
                <label className="label">Last name</label>
                <input className="input" placeholder="Rahman" required />
              </div>
            </div>
          )}

          <div>
            <label className="label">Email address</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                className="input pl-10"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="label">Phone number</label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                className="input pl-10"
                placeholder="+880 1700 000 000"
                required
              />
            </div>
          </div>

          {showBloodGroup && (
            <div>
              <label className="label">Blood group</label>
              <div className="grid grid-cols-4 gap-2">
                {bloodGroups.map((b) => (
                  <label
                    key={b}
                    className="cursor-pointer rounded-xl border border-slate-200 bg-white py-2 text-center text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:bg-brand-50 has-[:checked]:border-brand-500 has-[:checked]:bg-brand-50 has-[:checked]:text-brand-700"
                  >
                    <input
                      type="radio"
                      name="blood"
                      value={b}
                      className="sr-only"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </div>
          )}

          <div>
            <label className="label">Password</label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type={show ? "text" : "password"}
                className="input pl-10 pr-10"
                placeholder="At least 8 characters"
                required
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            <span>
              I agree to RedDrop's{" "}
              <Link href="#" className="font-medium text-brand-600 hover:text-brand-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="font-medium text-brand-600 hover:text-brand-700">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="btn-outline flex-1 !py-3.5"
            >
              Back
            </button>
            <button type="submit" className="btn-primary flex-[2] !py-3.5">
              Create account
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <p className="pt-1 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-brand-600 hover:text-brand-700"
            >
              Sign in
            </Link>
          </p>
        </form>
      )}
    </AuthShell>
  );
}
