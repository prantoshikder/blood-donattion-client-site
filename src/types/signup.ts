import type { LucideIcon } from "lucide-react";

export type Role = "donor" | "receiver" | "volunteer" | "hospital" | "admin";

export type RoleOption = {
  key: Role;
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  badge?: string;
};

export type PasswordStrength = {
  label: string;
  color: string;
  text: string;
};
