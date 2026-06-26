import {
  Award,
  Globe2,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";
import type {
  AboutStat,
  AboutValue,
  JourneyMilestone,
  TeamMember,
  Testimonial,
} from "@/types/about";

export const stats: AboutStat[] = [
  { k: "12.4K+", v: "Active donors", i: Users },
  { k: "38K+", v: "Lives saved", i: HeartHandshake },
  { k: "640+", v: "Hospitals", i: Award },
  { k: "60+", v: "Cities", i: Globe2 },
];

export const team: TeamMember[] = [
  {
    n: "Sadia Rahman",
    r: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=faces&q=80&auto=format",
  },
  {
    n: "Tanvir Ahmed",
    r: "Head of Operations",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&h=800&fit=crop&crop=faces&q=80&auto=format",
  },
  {
    n: "Dr. Imran Hossain",
    r: "Medical Advisor",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=faces&q=80&auto=format",
  },
  {
    n: "Nusrat Jahan",
    r: "Community Lead",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop&crop=faces&q=80&auto=format",
  },
];

export const values: AboutValue[] = [
  {
    i: HeartHandshake,
    t: "Compassion first",
    d: "Every line of code, every flow, is built around the people who give and receive blood.",
  },
  {
    i: Sparkles,
    t: "Modern by design",
    d: "Beautiful interfaces and frictionless flows that work for everyone, everywhere.",
  },
  {
    i: Globe2,
    t: "Open and inclusive",
    d: "Free to use, accessible to all, and designed to scale across borders and languages.",
  },
];

export const journey: JourneyMilestone[] = [
  {
    y: "2021",
    t: "The first request",
    d: "A single emergency post in a WhatsApp group saved a life overnight — and sparked an idea.",
  },
  {
    y: "2022",
    t: "RedDrop is born",
    d: "We launched our first app, connecting 500 donors across Dhaka in the first month.",
  },
  {
    y: "2023",
    t: "Going nationwide",
    d: "Expanded to 60+ cities and partnered with 640+ hospitals across Bangladesh.",
  },
  {
    y: "2024",
    t: "38K lives and counting",
    d: "Crossed 12,400 active donors and 38,000 lives touched — just getting started.",
  },
];

export const gallery: string[] = [
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&h=600&fit=crop",
];

export const testimonials: Testimonial[] = [
  {
    q: "I needed O− blood at 2am for my mother. RedDrop found a donor in 11 minutes. I'll never forget it.",
    n: "Farhana Akter",
    r: "Recipient's daughter, Dhaka",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=faces",
  },
  {
    q: "Donating used to mean phone calls and waiting. Now I get a request, tap once, and I'm helping someone nearby.",
    n: "Rakib Khan",
    r: "Donor since 2022, Chattogram",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  },
  {
    q: "As a hospital, RedDrop cut our emergency sourcing time in half. It's become part of how we operate.",
    n: "Dr. Sharmin Sultana",
    r: "Blood Bank Lead, Sylhet",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=faces",
  },
];
