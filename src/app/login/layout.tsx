import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Log In",
  description:
    "Log in to your RedDrop account to manage donations, respond to requests, and track your impact.",
  path: "/login",
  noindex: true,
});

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children;
}
