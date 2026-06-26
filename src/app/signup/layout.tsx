import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sign Up",
  description:
    "Create your free RedDrop account to become a donor, request blood, or organize donation drives.",
  path: "/signup",
  noindex: true,
});

export default function SignupLayout({ children }: { children: ReactNode }) {
  return children;
}
