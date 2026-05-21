"use client";

import { useState } from "react";
import { Bell, Camera, Lock, Mail, MapPin, Phone, Save, ShieldCheck, User } from "lucide-react";

const tabs = ["Profile", "Account", "Notifications", "Privacy"];

export default function SettingsPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-5 sm:space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">Settings</h1>
        <p className="mt-1 text-sm text-slate-600">
          Manage your profile, account, and notification preferences.
        </p>
      </div>

      <div className="card overflow-hidden !p-0">
        <div className="flex gap-1 overflow-x-auto border-b border-slate-100 px-2" style={{ scrollbarWidth: "none" }}>
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`relative shrink-0 px-4 py-4 text-sm font-medium transition sm:px-5 ${
                active === i ? "text-brand-700" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t}
              {active === i && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-brand-600" />
              )}
            </button>
          ))}
        </div>

        {active === 0 && (
          <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-brand-50 to-rose-50 p-6 text-center">
                <div className="relative mx-auto h-24 w-24">
                  <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-brand-500 to-rose-600 text-2xl font-bold text-white">
                    SR
                  </div>
                  <button className="absolute bottom-0 right-0 grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-slate-900 text-white shadow-lg">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-4 font-semibold text-slate-900">Sadia Rahman</p>
                <p className="text-sm text-slate-500">Donor · O+</p>
                <button className="btn-outline mt-4 w-full !py-2">Change photo</button>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">First name</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="input pl-10" defaultValue="Sadia" />
                  </div>
                </div>
                <div>
                  <label className="label">Last name</label>
                  <input className="input" defaultValue="Rahman" />
                </div>
              </div>

              <div>
                <label className="label">Email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input className="input pl-10" defaultValue="sadia@reddrop.app" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="label">Phone</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="input pl-10" defaultValue="+880 1700 000 000" />
                  </div>
                </div>
                <div>
                  <label className="label">City</label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="input pl-10" defaultValue="Dhaka" />
                  </div>
                </div>
              </div>

              <div>
                <label className="label">Blood group</label>
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
                  {["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      className={`rounded-xl border py-2 text-sm font-semibold transition ${
                        b === "O+"
                          ? "border-brand-500 bg-brand-50 text-brand-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-brand-300"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button className="btn-primary">
                  <Save className="h-4 w-4" />
                  Save changes
                </button>
              </div>
            </div>
          </div>
        )}

        {active === 1 && (
          <div className="space-y-3 p-4 sm:space-y-4 sm:p-6">
            <div className="rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-violet-50 text-violet-600">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Password</p>
                  <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                </div>
                <button className="btn-outline ml-auto !py-2">Change</button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Two-factor authentication</p>
                  <p className="text-xs text-slate-500">Add an extra layer of security</p>
                </div>
                <label className="ml-auto relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-brand-600 peer-checked:after:translate-x-full" />
                </label>
              </div>
            </div>
          </div>
        )}

        {active === 2 && (
          <div className="space-y-3 p-4 sm:p-6">
            {[
              { t: "Emergency request alerts", d: "When someone nearby needs your blood type" },
              { t: "Donation reminders", d: "When you're eligible to donate again" },
              { t: "Community updates", d: "New camps, drives, and stories" },
              { t: "Marketing emails", d: "Tips, news, and product updates" },
            ].map((n, i) => (
              <div key={n.t} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-50 text-amber-600">
                  <Bell className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{n.t}</p>
                  <p className="text-xs text-slate-500">{n.d}</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked={i < 3} className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-brand-600 peer-checked:after:translate-x-full" />
                </label>
              </div>
            ))}
          </div>
        )}

        {active === 3 && (
          <div className="space-y-3 p-4 sm:p-6">
            {[
              { t: "Show my profile publicly", d: "Anyone can see your donor profile" },
              { t: "Show contact info to requesters", d: "Receivers can see your phone number" },
              { t: "Allow location-based matching", d: "Find donors near your area" },
            ].map((n, i) => (
              <div key={n.t} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-sky-50 text-sky-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{n.t}</p>
                  <p className="text-xs text-slate-500">{n.d}</p>
                </div>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input type="checkbox" defaultChecked={i < 2} className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-brand-600 peer-checked:after:translate-x-full" />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
