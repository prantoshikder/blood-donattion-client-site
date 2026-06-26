"use client";

import AuthShell from "@/components/AuthShell";
import { bloodGroups, roles, strengthMeta, type Role } from "@/temp/signupData";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Hospital,
  Loader2,
  Lock,
  Mail,
  Phone,
  Sparkles,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function getPasswordStrength(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("donor");
  const [step, setStep] = useState<1 | 2>(1);
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const showBloodGroup = role === "donor" || role === "receiver";
  const showOrgFields = role === "hospital";

  const strength = useMemo(() => getPasswordStrength(password), [password]);
  const meta = strengthMeta[strength];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <AuthShell
      title="Join RedDrop"
      subtitle="Create your account and pick the role that fits you best."
    >
      {/* Stepper */}
      <div className="mb-7">
        <div className="flex items-center gap-3">
          {[1, 2].map((n, i) => {
            const active = step === n;
            const done = step > n;
            return (
              <div key={n} className="flex flex-1 items-center gap-3">
                <div
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-xs font-bold transition ${
                    done
                      ? "bg-brand-600 text-white"
                      : active
                        ? "bg-linear-to-br from-brand-600 to-rose-500 text-white shadow-md shadow-brand-500/30 ring-4 ring-brand-100"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {done ? <CheckCircle2 className="h-4 w-4" /> : n}
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-xs font-semibold transition ${
                      step >= n ? "text-slate-900" : "text-slate-400"
                    }`}
                  >
                    Step {n}
                  </p>
                  <p
                    className={`truncate text-[11px] transition ${
                      step >= n ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {n === 1 ? "Choose role" : "Your details"}
                  </p>
                </div>
                {i < 1 && (
                  <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full bg-linear-to-r from-brand-600 to-rose-500 transition-all duration-500 ${
                        step > 1 ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {step === 1 ? (
        <div className="space-y-2.5">
          {roles.map((r) => {
            const selected = role === r.key;
            return (
              <button
                key={r.key}
                type="button"
                onClick={() => setRole(r.key)}
                className={`group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition active:scale-[0.99] sm:gap-4 sm:p-3.5 ${
                  selected
                    ? "border-brand-500 bg-brand-50/70 shadow-md shadow-brand-500/10 ring-1 ring-brand-200"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div
                  className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br ${r.color} text-white shadow-md transition group-hover:scale-105`}
                >
                  <r.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                      {r.title}
                    </p>
                    {r.badge && (
                      <span className="inline-flex items-center gap-0.5 rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700">
                        <Sparkles className="h-2.5 w-2.5" />
                        {r.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {r.desc}
                  </p>
                </div>
                <div
                  className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${
                    selected
                      ? "border-brand-600 bg-brand-600"
                      : "border-slate-300 group-hover:border-slate-400"
                  }`}
                >
                  {selected && (
                    <div className="h-2 w-2 rounded-full bg-white" />
                  )}
                </div>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setStep(2)}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand-600 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/40 active:scale-[0.98]"
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Selected role chip */}
          <div className="flex items-center justify-between rounded-2xl border border-brand-200 bg-brand-50/60 p-3">
            <div className="flex items-center gap-3 min-w-0">
              {(() => {
                const r = roles.find((x) => x.key === role)!;
                return (
                  <>
                    <div
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-linear-to-br ${r.color} text-white shadow-sm`}
                    >
                      <r.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                        Signing up as
                      </p>
                      <p className="truncate text-sm font-semibold text-slate-900">
                        {r.title}
                      </p>
                    </div>
                  </>
                );
              })()}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold text-brand-700 hover:bg-white"
            >
              Change
            </button>
          </div>

          {showOrgFields ? (
            <div>
              <label htmlFor="org" className="label">
                Organization name
              </label>
              <div className="group relative">
                <Hospital className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
                <input
                  id="org"
                  className="input pl-10"
                  placeholder="Square Hospital Ltd."
                  required
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="first" className="label">
                  First name
                </label>
                <div className="group relative">
                  <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
                  <input
                    id="first"
                    className="input pl-10"
                    placeholder="Sadia"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last" className="label">
                  Last name
                </label>
                <input
                  id="last"
                  className="input"
                  placeholder="Rahman"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <div className="group relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
              <input
                id="email"
                type="email"
                className="input pl-10"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Phone number
            </label>
            <div className="group relative">
              <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
              <input
                id="phone"
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
                    className="flex cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:bg-brand-50 active:scale-95 has-checked:border-brand-500 has-checked:bg-linear-to-br has-checked:from-brand-600 has-checked:to-rose-500 has-checked:text-white has-checked:shadow-md"
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
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="group relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
              <input
                id="password"
                type={show ? "text" : "password"}
                className="input pl-10 pr-10"
                placeholder="At least 8 characters"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShow((v) => !v)}
                aria-label="Toggle password visibility"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              >
                {show ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Strength meter */}
            {password.length > 0 && (
              <div className="mt-2">
                <div className="flex gap-1">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 flex-1 rounded-full transition ${
                        i < strength ? meta.color : "bg-slate-100"
                      }`}
                    />
                  ))}
                </div>
                <p className={`mt-1.5 text-xs font-medium ${meta.text}`}>
                  Password strength: {meta.label}
                </p>
              </div>
            )}
          </div>

          <label className="flex items-start gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              required
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
            />
            <span>
              I agree to RedDrop's{" "}
              <Link
                href="#"
                className="font-medium text-brand-600 hover:text-brand-700"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="font-medium text-brand-600 hover:text-brand-700"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-12 flex-2 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand-600 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
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
