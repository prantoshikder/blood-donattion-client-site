import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

type PageHeroProps = {
  /** Optional pill badge shown above the title */
  badgeIcon?: LucideIcon;
  badgeText?: string;
  /** Main heading — string or JSX (e.g. with line breaks / gradient spans) */
  title: ReactNode;
  /** Supporting paragraph under the title */
  subtitle?: ReactNode;
  /** Render the soft blurred decoration blob in the background */
  decoration?: boolean;
  /** Full-bleed background image URL — switches the hero to a dark, image-backed style */
  backgroundImage?: string;
  /** Alt text for the background image (decorative by default) */
  backgroundAlt?: string;
  /** Extra content rendered full-width below the centered text (e.g. a search card) */
  children?: ReactNode;
};

export default function PageHero({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  decoration = false,
  backgroundImage,
  backgroundAlt = "",
  children,
}: PageHeroProps) {
  const hasImage = Boolean(backgroundImage);

  return (
    <section
      className={`relative overflow-hidden ${
        hasImage
          ? "bg-brand-950"
          : "bg-linear-to-br from-brand-50 via-rose-50/70 to-white"
      }`}
    >
      {hasImage && (
        <>
          <Image
            src={backgroundImage!}
            alt={backgroundAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Brand gradient scrim keeps the text readable over any photo */}
          <div className="absolute inset-0 bg-linear-to-br from-brand-950/90 via-brand-900/80 to-rose-900/75" />
          {/* Soft darkening at the bottom edge for extra contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
        </>
      )}

      {decoration && !hasImage && (
        <div className="absolute -right-32 top-10 -z-10 h-64 w-64 rounded-full bg-brand-100 blur-3xl sm:h-96 sm:w-96" />
      )}

      <div
        className={`section relative ${
          hasImage ? "py-16 sm:py-24" : "py-10 sm:py-16"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          {badgeText && (
            <span
              className={
                hasImage
                  ? "inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                  : "badge"
              }
            >
              {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
              {badgeText}
            </span>
          )}
          <h1
            className={`heading-1 mt-4 text-balance ${
              hasImage ? "text-white drop-shadow-sm" : ""
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${
                hasImage ? "text-white/90" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}
