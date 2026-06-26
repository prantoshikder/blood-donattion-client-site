"use client";

import { Check, ChevronDown, Droplet } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ALL_BLOOD, BLOOD_GROUPS } from "../../temp/requestData";

type BloodGroupSelectProps = {
  value: string;
  onChange: (blood: string) => void;
};

export default function BloodGroupSelect({
  value,
  onChange,
}: BloodGroupSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function onPointer(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  function select(blood: string) {
    onChange(blood);
    setOpen(false);
  }

  const isFiltering = value !== ALL_BLOOD;

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition sm:w-auto ${
          isFiltering
            ? "border-brand-200 bg-brand-50 text-brand-700"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          <Droplet
            className={`h-3.5 w-3.5 ${
              isFiltering ? "fill-brand-500 text-brand-500" : "text-slate-400"
            }`}
          />
          {value}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 z-30 mt-2 w-64 origin-top-right rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
          <button
            type="button"
            onClick={() => select(ALL_BLOOD)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition ${
              value === ALL_BLOOD
                ? "bg-brand-50 text-brand-700"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            All blood groups
            {value === ALL_BLOOD && <Check className="h-3.5 w-3.5" />}
          </button>

          <div className="my-1.5 h-px bg-slate-100" />

          <div className="grid grid-cols-4 gap-1.5">
            {BLOOD_GROUPS.map((b) => {
              const active = value === b;
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => select(b)}
                  className={`relative grid h-11 place-items-center rounded-xl text-sm font-bold transition ${
                    active
                      ? "bg-linear-to-br from-brand-500 to-rose-600 text-white shadow-md"
                      : "bg-slate-50 text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                  }`}
                >
                  {b}
                  {active && (
                    <Check className="absolute right-1 top-1 h-3 w-3" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
