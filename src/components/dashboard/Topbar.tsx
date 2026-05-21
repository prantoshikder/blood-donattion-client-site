"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Topbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-2 border-b border-slate-200 bg-white/80 px-3 backdrop-blur-md sm:gap-3 sm:px-6">
      <button
        onClick={onMenu}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-slate-200 text-slate-700 transition active:scale-95 lg:hidden"
        aria-label="Open sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative hidden flex-1 md:block">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          placeholder="Search donors, requests, hospitals…"
          className="w-full max-w-md rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-300 focus:bg-white focus:ring-4 focus:ring-brand-100"
        />
      </div>

      {/* Mobile search button */}
      <button
        aria-label="Search"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition active:scale-95 md:hidden"
      >
        <Search className="h-5 w-5" />
      </button>

      <div className="ml-auto flex items-center gap-2">
        <button
          aria-label="Notifications"
          className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-50 active:scale-95"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-2 transition hover:bg-slate-50 sm:pr-4">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-rose-600 text-sm font-semibold text-white">
            SR
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-semibold leading-tight text-slate-900">
              Sadia Rahman
            </span>
            <span className="block text-[11px] leading-tight text-slate-500">
              Donor · O+
            </span>
          </span>
        </button>
      </div>
    </header>
  );
}
