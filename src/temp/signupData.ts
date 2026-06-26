import {
  Droplet,
  HeartHandshake,
  Hospital,
  ShieldCheck,
  Users,
} from "lucide-react";

export type Role = "donor" | "receiver" | "volunteer" | "hospital" | "admin";

export type RoleOption = {
  key: Role;
  title: string;
  desc: string;
  icon: typeof Droplet;
  color: string;
  badge?: string;
};

export const roles: RoleOption[] = [
  {
    key: "donor",
    title: "Donor",
    desc: "I want to donate blood and help others",
    icon: Droplet,
    color: "from-rose-500 to-rose-600",
    badge: "Popular",
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

export const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

export const strengthMeta = [
  { label: "Too weak", color: "bg-slate-200", text: "text-slate-400" },
  { label: "Weak", color: "bg-rose-500", text: "text-rose-600" },
  { label: "Fair", color: "bg-amber-500", text: "text-amber-600" },
  { label: "Good", color: "bg-sky-500", text: "text-sky-600" },
  { label: "Strong", color: "bg-emerald-500", text: "text-emerald-600" },
];
