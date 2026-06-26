import type { Metadata } from "next";

/**
 * Central SEO configuration for the whole site.
 * Update `url` to the production domain when deploying.
 */
export const siteConfig = {
  name: "RedDrop",
  title: "RedDrop — Save Lives with a Drop of Blood",
  description:
    "RedDrop is a modern blood donation platform connecting donors, receivers, volunteers, hospitals and blood banks across Bangladesh. Find a donor or post an emergency request in minutes.",
  url: "https://reddrop.app",
  locale: "en_US",
  twitter: "@reddrop",
  keywords: [
    "blood donation",
    "blood donor",
    "donate blood",
    "blood bank",
    "find blood donor",
    "emergency blood",
    "blood request",
    "save lives",
    "Bangladesh blood donation",
    "RedDrop",
  ],
};

type BuildMetadataOptions = {
  /** Page title (without the site-name suffix — the template adds it) */
  title: string;
  description: string;
  /** Path starting with "/" — used for the canonical URL and OG url */
  path: string;
  keywords?: string[];
  /** Set true for private/auth pages that should not be indexed */
  noindex?: boolean;
  /** Set true to use the title verbatim (skips the "— RedDrop" template). */
  absoluteTitle?: boolean;
};

/**
 * Builds a consistent per-page Metadata object: canonical URL, Open Graph and
 * Twitter cards, all resolved against `metadataBase` set in the root layout.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noindex,
  absoluteTitle,
}: BuildMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: keywords ?? siteConfig.keywords,
    alternates: { canonical: path },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
