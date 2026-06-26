import type { LucideIcon } from "lucide-react";

export type DashboardStat = {
  label: string;
  value: string;
  delta: string;
  icon: LucideIcon;
  color: string;
};

export type DashboardRequest = {
  name: string;
  blood: string;
  units: number;
  location: string;
  when: string;
  urgent: boolean;
};

export type DonationHistoryEntry = {
  date: string;
  place: string;
  units: number;
  recipient: string;
};

export type DonationAchievement = {
  t: string;
  d: string;
  earned: boolean;
};

export type DashboardRequestListItem = {
  id: string;
  patient: string;
  blood: string;
  units: number;
  status: string;
  hospital: string;
  needed: string;
  contact: string;
};

export type DashboardDonor = {
  name: string;
  blood: string;
  city: string;
  last: string;
  rating: number;
  available: boolean;
};
