import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about donating blood, eligibility, safety, and how RedDrop connects donors with people in need.",
  path: "/faq",
});

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
