import { Droplet } from "lucide-react";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim =
    size === "lg" ? "h-10 w-10" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const text =
    size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";
  return (
    <div className="flex items-center gap-2">
      <div
        className={`relative ${dim} grid place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30`}
      >
        <Droplet className="h-1/2 w-1/2 fill-white" />
      </div>
      <span className={`${text} font-bold tracking-tight text-slate-900`}>
        Red<span className="text-brand-600">Drop</span>
      </span>
    </div>
  );
}
