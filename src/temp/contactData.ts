import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactChannel, WorkingHour } from "@/types/contact";

export const channels: ContactChannel[] = [
  {
    i: Mail,
    t: "Email us",
    v: "support@reddrop.app",
    d: "We reply within 24 hours",
  },
  {
    i: Phone,
    t: "Call us",
    v: "+880 1700 000 000",
    d: "Mon–Sat, 9am – 8pm",
  },
  {
    i: MapPin,
    t: "Visit us",
    v: "Dhanmondi, Dhaka",
    d: "Bangladesh HQ",
  },
];

export const hours: WorkingHour[] = [
  { d: "Monday – Friday", h: "9:00 AM – 8:00 PM" },
  { d: "Saturday", h: "10:00 AM – 6:00 PM" },
  { d: "Sunday", h: "Emergency support only" },
];
