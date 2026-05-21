"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  Fingerprint,
  Loader2,
} from "lucide-react";
import AuthShell from "@/components/AuthShell";

export default function LoginPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to your RedDrop account to continue saving lives."
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <div className="group relative">
            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="input pl-10"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="label">
              Password
            </label>
            <Link
              href="#"
              className="text-xs font-semibold text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <div className="group relative">
            <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-brand-600" />
            <input
              id="password"
              type={show ? "text" : "password"}
              required
              placeholder="Enter your password"
              className="input pl-10 pr-10"
            />
            <button
              type="button"
              onClick={() => setShow((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
              aria-label="Toggle password visibility"
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
          />
          Remember me on this device
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-brand-600 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/40 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in…
            </>
          ) : (
            <>
              Sign in
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 font-medium uppercase tracking-wider text-slate-400">
              or continue with
            </span>
          </div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.85 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.67-2.83Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07L5.85 9.9C6.71 7.3 9.14 5.38 12 5.38Z"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.84c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.21.2 2.21.2v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89H13.5v6.98A10 10 0 0 0 22 12Z" />
            </svg>
            Facebook
          </button>
        </div>

        {/* Passwordless hint */}
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-slate-50/60 px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-brand-400 hover:bg-brand-50/50 hover:text-brand-700"
        >
          <Fingerprint className="h-4 w-4" />
          Sign in with magic link
        </button>

        <p className="pt-2 text-center text-sm text-slate-600">
          New to RedDrop?{" "}
          <Link
            href="/signup"
            className="font-semibold text-brand-600 hover:text-brand-700"
          >
            Create an account
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
