"use client";

import { useEffect, useState } from "react";
import { logo } from "@/lib/logo";

export interface ZLogoProps {
  size?: number | string;
  className?: string;
  title?: string;
  variant?: "mark" | "animated";
  strokeColor?: string;
  fillColor?: string;
  decorative?: boolean;
}

export function ZLogo({
  size = 48,
  className = "",
  title = "Zia calligraphy monogram",
  variant = "mark",
  strokeColor = "var(--ink)",
  fillColor = "var(--ink)",
  decorative = false,
}: ZLogoProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setReducedMotion(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  if (variant === "mark") {
    return (
      <svg
        viewBox={logo.viewBox}
        width={size}
        height={size}
        className={`aspect-[100/104.51] shrink-0 select-none ${className}`}
        fill={fillColor}
        role={decorative ? undefined : "img"}
        aria-hidden={decorative ? "true" : undefined}
        aria-label={decorative ? undefined : title}
      >
        {!decorative && <title>{title}</title>}
        {logo.paths.map((d, idx) => (
          <path key={idx} d={d} fillRule="evenodd" clipRule="evenodd" />
        ))}
      </svg>
    );
  }

  // Animated mid-century contour draw variant
  return (
    <div
      className={`relative aspect-[100/104.51] select-none ${
        reducedMotion ? "" : "z-midcentury-idle"
      } ${className}`}
      style={{ width: size }}
      aria-hidden={decorative ? "true" : undefined}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : title}
    >
      <svg
        viewBox={logo.viewBox}
        className="w-full h-full overflow-visible"
        fill="none"
      >
        {!decorative && <title>{title}</title>}
        {logo.paths.map((d, idx) => (
          <path
            key={idx}
            d={d}
            pathLength={1}
            stroke={strokeColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={fillColor}
            fillRule="evenodd"
            clipRule="evenodd"
            className={
              reducedMotion
                ? undefined
                : `z-midcentury-path z-midcentury-path-${idx}`
            }
            style={{
              strokeDasharray: 1,
              strokeDashoffset: 0,
              strokeOpacity: reducedMotion ? 0 : undefined,
              fillOpacity: 1,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default ZLogo;
