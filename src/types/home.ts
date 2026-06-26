import type { LucideIcon } from "lucide-react";

// AppDownloadSection
export type Perk = {
  icon: LucideIcon;
  text: string;
};

// BloodCompatibilitySection
export type CompatibilityRow = {
  type: string;
  donateTo: string;
  receiveFrom: string;
  tag: string;
  color: string;
};

// EligibilityCheckerSection
export type EligibilityCheck = {
  icon: LucideIcon;
  pass: string;
  fail: string;
};

// FAQSection
export type HomeFaq = {
  q: string;
  a: string;
};

// FeaturesSection
export type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
};

// HowItWorksSection
export type Step = {
  n: string;
  title: string;
  desc: string;
};

// RolesSection
export type HomeRole = {
  t: string;
  d: string;
  i: LucideIcon;
  c: string;
};

// StatsSection
export type HomeStat = {
  k: string;
  v: string;
  icon: LucideIcon;
};

// TestimonialsSection
export type HomeTestimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

// UpcomingCampsSection
export type Camp = {
  title: string;
  date: string;
  time: string;
  venue: string;
  registered: number;
  target: number;
  image: string;
};

// UrgentRequestsSection
export type UrgentRequest = {
  blood: string;
  patient: string;
  hospital: string;
  units: number;
  posted: string;
  severity: string;
};

export type SeverityStyles = Record<string, string>;
