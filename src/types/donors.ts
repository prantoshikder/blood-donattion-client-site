import type { LucideIcon } from "lucide-react";

export type Donor = {
  name: string;
  blood: string;
  city: string;
  last: string;
  rating: number;
  available: boolean;
  image: string;
};

export type DonorStat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type RequestStep = {
  icon: LucideIcon;
  title: string;
  desc: string;
};
