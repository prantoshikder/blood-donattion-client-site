import {
  Bell,
  MapPin,
  Zap,
  Calendar,
  Weight,
  Activity,
  Heart,
  Search,
  ShieldCheck,
  Hospital,
  HeartHandshake,
  Droplet,
  Users,
} from "lucide-react";

// AppDownloadSection
export const perks = [
  { icon: Bell, text: "Instant emergency alerts" },
  { icon: MapPin, text: "Find donors on the map" },
  { icon: Zap, text: "1-tap respond & donate" },
];

// BloodCompatibilitySection
export const compatibility = [
  { type: "O−", donateTo: "Everyone", receiveFrom: "O−", tag: "Universal donor", color: "from-rose-500 to-rose-600" },
  { type: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O+, O−", tag: "Most common", color: "from-rose-400 to-rose-500" },
  { type: "A−", donateTo: "A±, AB±", receiveFrom: "A−, O−", tag: "Rare", color: "from-amber-500 to-orange-500" },
  { type: "A+", donateTo: "A+, AB+", receiveFrom: "A±, O±", tag: "Common", color: "from-amber-400 to-amber-500" },
  { type: "B−", donateTo: "B±, AB±", receiveFrom: "B−, O−", tag: "Rare", color: "from-emerald-500 to-teal-600" },
  { type: "B+", donateTo: "B+, AB+", receiveFrom: "B±, O±", tag: "Common", color: "from-emerald-400 to-emerald-500" },
  { type: "AB−", donateTo: "AB±", receiveFrom: "A−, B−, AB−, O−", tag: "Rare", color: "from-violet-500 to-indigo-600" },
  { type: "AB+", donateTo: "AB+", receiveFrom: "Everyone", tag: "Universal receiver", color: "from-violet-400 to-purple-500" },
];

// EligibilityCheckerSection
export const checks = [
  {
    icon: Calendar,
    pass: "Age 18 – 65 years",
    fail: "Outside age range",
  },
  {
    icon: Weight,
    pass: "Weight 50 kg or more",
    fail: "Under minimum weight",
  },
  {
    icon: Activity,
    pass: "Healthy & feeling well",
    fail: "Recent illness or fever",
  },
  {
    icon: Heart,
    pass: "3+ months since last donation",
    fail: "Donated recently",
  },
];

// FAQSection
export const faqs = [
  {
    q: "Is donating blood safe?",
    a: "Yes. Sterile, single-use needles are used for every donation. The process takes about 10 minutes and is performed by trained medical professionals.",
  },
  {
    q: "How often can I donate blood?",
    a: "Most healthy adults can donate whole blood every 90 days (about 3 months). Plasma and platelet donations have different intervals.",
  },
  {
    q: "Who can donate blood?",
    a: "Generally, anyone aged 18 – 65, weighing at least 50 kg, and in good health. Take our quick eligibility quiz above to confirm.",
  },
  {
    q: "Does RedDrop charge donors or receivers?",
    a: "No. RedDrop is completely free for donors and receivers. We never charge for connecting people in need with willing donors.",
  },
  {
    q: "How is my personal data protected?",
    a: "Your contact info is only shared with verified hospitals or receivers when you explicitly accept a request. Read our Privacy Policy for full details.",
  },
  {
    q: "How do emergency alerts work?",
    a: "When a critical request matches your blood type and location, you'll receive a push notification. You choose whether to respond — there's no obligation.",
  },
];

// FeaturesSection
export const features = [
  {
    icon: Search,
    title: "Find Donors Instantly",
    desc: "Search by blood group, city, or hospital and reach verified donors in seconds.",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    desc: "Broadcast urgent requests and notify nearby donors automatically.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    desc: "Every donor and hospital is verified to keep the network safe and trustworthy.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Activity,
    title: "Donation History",
    desc: "Track every donation, eligibility, and next safe donation date in one place.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Hospital,
    title: "Hospital Network",
    desc: "Hospitals and blood banks can manage inventory and request directly from donors.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Hub",
    desc: "Volunteers organize camps, manage requests, and grow the donor community.",
    color: "from-pink-500 to-fuchsia-600",
  },
];

// HeroSection
export const bloodGroups = ["A+", "A−", "B+", "B−", "O+", "O−", "AB+", "AB−"];

// HowItWorksSection
export const steps = [
  {
    n: "01",
    title: "Create your account",
    desc: "Sign up as a donor, receiver, volunteer, or hospital in less than a minute.",
  },
  {
    n: "02",
    title: "Find or request blood",
    desc: "Search by blood type or post an urgent request — we route it to the nearest matches.",
  },
  {
    n: "03",
    title: "Connect & save a life",
    desc: "Chat, arrange a meet at a hospital, and donate. Track every life you helped save.",
  },
];

// PartnersSection
export const partners = [
  "Square Hospital",
  "Apollo Hospital",
  "United Hospital",
  "Evercare",
  "Labaid",
  "Ibn Sina",
  "BIRDEM",
  "ICDDR,B",
  "Sandhani",
  "Bangladesh Red Crescent",
  "Quantum Foundation",
  "Badhan",
];

// RolesSection
export const roles = [
  { t: "Donor", d: "Give blood and track impact", i: Droplet, c: "bg-rose-500" },
  { t: "Receiver", d: "Request blood urgently", i: HeartHandshake, c: "bg-amber-500" },
  { t: "Volunteer", d: "Organize camps & drives", i: Users, c: "bg-emerald-500" },
  { t: "Hospital", d: "Manage inventory", i: Hospital, c: "bg-sky-500" },
];

// StatsSection
export const stats = [
  { k: "12,400+", v: "Verified Donors" },
  { k: "640+", v: "Partner Hospitals" },
  { k: "38,200", v: "Donations" },
  { k: "24/7", v: "Emergency" },
];

// TestimonialsSection
export const testimonials = [
  {
    name: "Sadia Rahman",
    role: "Donor • O+",
    quote:
      "I donated twice through RedDrop. The app reminds me when I'm eligible again. Truly thoughtful.",
  },
  {
    name: "Dr. Imran Hossain",
    role: "Hospital Coordinator",
    quote:
      "Our blood bank's emergency response time dropped by 60% after joining RedDrop.",
  },
  {
    name: "Tanvir Ahmed",
    role: "Volunteer",
    quote:
      "Organizing camps used to be chaotic. Now everything from invites to records is one tap away.",
  },
];

// UpcomingCampsSection
export const camps = [
  {
    title: "Dhaka University Blood Drive",
    date: "May 28, 2026",
    time: "9:00 AM – 4:00 PM",
    venue: "TSC, University of Dhaka",
    registered: 142,
    target: 300,
  },
  {
    title: "Corporate Donors Camp",
    date: "Jun 04, 2026",
    time: "10:00 AM – 5:00 PM",
    venue: "Bashundhara City, Dhaka",
    registered: 87,
    target: 200,
  },
  {
    title: "Community Wellness Drive",
    date: "Jun 12, 2026",
    time: "8:00 AM – 2:00 PM",
    venue: "Dhanmondi Lake Park",
    registered: 56,
    target: 150,
  },
];

// UrgentRequestsSection
export const urgentRequests = [
  {
    blood: "O−",
    patient: "Aman Khan",
    hospital: "Square Hospital, Dhaka",
    units: 2,
    posted: "12 min ago",
    severity: "Critical",
  },
  {
    blood: "AB+",
    patient: "Rina Akter",
    hospital: "Apollo Hospital, Dhaka",
    units: 1,
    posted: "38 min ago",
    severity: "Urgent",
  },
  {
    blood: "B+",
    patient: "Hasan Ali",
    hospital: "United Hospital, Dhaka",
    units: 3,
    posted: "1 hr ago",
    severity: "Urgent",
  },
];

export const severityStyles: Record<string, string> = {
  Critical: "bg-rose-100 text-rose-700 ring-1 ring-rose-200",
  Urgent: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
};
