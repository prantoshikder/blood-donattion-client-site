import {
  Activity,
  Bell,
  Calendar,
  Droplet,
  HeartHandshake,
  History,
  Home,
  Hospital,
  Info,
  LayoutDashboard,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Users,
} from "lucide-react";

export const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/donors", label: "Find Donors", icon: Search },
  { href: "/requests", label: "Blood Requests", icon: Droplet },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

export const groups = [
  {
    label: "Overview",
    items: [
      { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/dashboard/donations", icon: Droplet, label: "Donations" },
      { href: "/dashboard/requests", icon: HeartHandshake, label: "Requests" },
      { href: "/dashboard/donors", icon: Users, label: "Donors" },
    ],
  },
  {
    label: "Activity",
    items: [
      { href: "/dashboard/schedule", icon: Calendar, label: "Schedule" },
      { href: "/dashboard/history", icon: History, label: "History" },
      { href: "/dashboard/inventory", icon: Hospital, label: "Inventory" },
      { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
    ],
  },
  {
    label: "Account",
    items: [
      { href: "/dashboard/notifications", icon: Bell, label: "Notifications" },
      { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    ],
  },
];

export const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

export const platformLinks = [
  { href: "/donors", label: "Find Donors" },
  { href: "/requests", label: "Blood Requests" },
  { href: "/camps", label: "Donation Camps" },
  { href: "/eligibility", label: "Check Eligibility" },
  { href: "/dashboard", label: "Dashboard" },
];

export const resourceLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/compatibility", label: "Blood Compatibility" },
  { href: "/stories", label: "Donor Stories" },
];

export const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/partners", label: "Partners" },
  { href: "/press", label: "Press Kit" },
  { href: "/support", label: "Help Center" },
];
