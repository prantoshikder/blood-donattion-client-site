import type { LucideIcon } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type SidebarItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export type SidebarGroup = {
  label: string;
  items: SidebarItem[];
};

export type FooterLink = {
  href: string;
  label: string;
};
