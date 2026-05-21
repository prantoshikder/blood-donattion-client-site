import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RedDrop — Save Lives with a Drop of Blood",
  description:
    "A modern blood donation platform connecting donors, receivers, volunteers, hospitals and blood banks.",
  keywords: ["blood donation", "donor", "blood bank", "save lives", "RedDrop"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e11d48",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased"
      >
        {children}
      </body>
    </html>
  );
}
