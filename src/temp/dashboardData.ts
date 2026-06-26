import { Activity, Droplet, HeartHandshake, Users } from "lucide-react";
import type {
  DashboardStat,
  DashboardRequest,
  DonationHistoryEntry,
  DonationAchievement,
  DashboardRequestListItem,
  DashboardDonor,
} from "@/types/dashboard";

export const dashboardStats: DashboardStat[] = [
  {
    label: "Total Donations",
    value: "12",
    delta: "+2 this month",
    icon: Droplet,
    color: "from-rose-500 to-rose-600",
  },
  {
    label: "Lives Impacted",
    value: "36",
    delta: "+6 lives saved",
    icon: HeartHandshake,
    color: "from-amber-500 to-orange-600",
  },
  {
    label: "Active Requests",
    value: "4",
    delta: "2 urgent",
    icon: Activity,
    color: "from-violet-500 to-indigo-600",
  },
  {
    label: "Community",
    value: "248",
    delta: "Donors nearby",
    icon: Users,
    color: "from-emerald-500 to-teal-600",
  },
];

export const dashboardRequests: DashboardRequest[] = [
  {
    name: "Mehedi Hasan",
    blood: "B+",
    units: 2,
    location: "Square Hospital, Dhaka",
    when: "Today, 4:00 PM",
    urgent: true,
  },
  {
    name: "Anika Sultana",
    blood: "O−",
    units: 1,
    location: "Apollo Hospital, Dhaka",
    when: "Tomorrow, 11:00 AM",
    urgent: true,
  },
  {
    name: "Rakib Hossain",
    blood: "A+",
    units: 3,
    location: "United Hospital, Dhaka",
    when: "Mar 22, 9:00 AM",
    urgent: false,
  },
  {
    name: "Tania Akter",
    blood: "AB+",
    units: 1,
    location: "Evercare Hospital",
    when: "Mar 24, 5:30 PM",
    urgent: false,
  },
];

export const dashboardMonthly: number[] = [4, 6, 5, 8, 7, 9, 10, 8, 12, 11, 9, 14];

export const donationHistory: DonationHistoryEntry[] = [
  { date: "Feb 12, 2026", place: "Square Hospital, Dhaka", units: 1, recipient: "Anonymous" },
  { date: "Nov 02, 2025", place: "BIRDEM, Dhaka", units: 1, recipient: "Tania Akter" },
  { date: "Aug 14, 2025", place: "Apollo Hospital", units: 1, recipient: "Mehedi Hasan" },
  { date: "May 22, 2025", place: "United Hospital", units: 1, recipient: "Rakib Khan" },
  { date: "Feb 18, 2025", place: "Labaid Hospital", units: 1, recipient: "Anonymous" },
];

export const donationAchievements: DonationAchievement[] = [
  { t: "First Drop", d: "Completed your first donation", earned: true },
  { t: "Lifesaver", d: "Helped 10+ patients", earned: true },
  { t: "Consistency", d: "5 donations in a year", earned: true },
  { t: "Hero of the Year", d: "Top 1% donor in your city", earned: false },
];

export const settingsTabs: string[] = ["Profile", "Account", "Notifications", "Privacy"];

export const dashboardRequestList: DashboardRequestListItem[] = [
  { id: "R-1042", patient: "Mehedi Hasan", blood: "B+", units: 2, status: "urgent", hospital: "Square Hospital, Dhaka", needed: "Today, 4:00 PM", contact: "+880 1711 000 011" },
  { id: "R-1041", patient: "Anika Sultana", blood: "O−", units: 1, status: "urgent", hospital: "Apollo, Dhaka", needed: "Tomorrow, 11:00 AM", contact: "+880 1722 000 022" },
  { id: "R-1040", patient: "Rakib Hossain", blood: "A+", units: 3, status: "open", hospital: "United Hospital", needed: "Mar 22, 9:00 AM", contact: "+880 1733 000 033" },
  { id: "R-1039", patient: "Tania Akter", blood: "AB+", units: 1, status: "open", hospital: "Evercare Hospital", needed: "Mar 24, 5:30 PM", contact: "+880 1744 000 044" },
  { id: "R-1038", patient: "Imran Khan", blood: "O+", units: 2, status: "fulfilled", hospital: "BIRDEM", needed: "Mar 18", contact: "+880 1755 000 055" },
  { id: "R-1037", patient: "Sumi Akter", blood: "A−", units: 1, status: "fulfilled", hospital: "Labaid", needed: "Mar 16", contact: "+880 1766 000 066" },
];

export const dashboardRequestColors: Record<string, string> = {
  urgent: "bg-rose-50 text-rose-700",
  open: "bg-amber-50 text-amber-700",
  fulfilled: "bg-emerald-50 text-emerald-700",
};

export const dashboardDonors: DashboardDonor[] = [
  { name: "Tanvir Ahmed", blood: "O+", city: "Dhaka", last: "2 months ago", rating: 4.9, available: true },
  { name: "Nusrat Jahan", blood: "A−", city: "Chattogram", last: "1 month ago", rating: 4.8, available: true },
  { name: "Imran Hossain", blood: "B+", city: "Sylhet", last: "3 months ago", rating: 4.7, available: false },
  { name: "Rakib Khan", blood: "AB+", city: "Dhaka", last: "4 months ago", rating: 4.9, available: true },
  { name: "Mehedi Hasan", blood: "O−", city: "Khulna", last: "5 months ago", rating: 5.0, available: true },
  { name: "Anika Sultana", blood: "A+", city: "Dhaka", last: "1 month ago", rating: 4.6, available: false },
  { name: "Sadia Rahman", blood: "B−", city: "Rajshahi", last: "2 weeks ago", rating: 4.8, available: true },
  { name: "Tania Akter", blood: "AB−", city: "Barishal", last: "6 months ago", rating: 4.7, available: true },
];
