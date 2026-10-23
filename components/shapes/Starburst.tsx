"use client";

import React from "react";

interface StarburstProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  variant?: "atomic" | "geometric" | "sparkle";
}

export function Starburst({
  size = 100,
  fillColor = "currentColor",
  strokeColor = "var(--ink)",
  strokeWidth = 2,
  variant = "atomic",
  className = "",
  ...props
}: StarburstProps) {
  if (variant === "geometric") {
    // 8-point faceted star
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M50 0 L58 36 L94 22 L72 50 L94 78 L58 64 L50 100 L42 64 L6 78 L28 50 L6 22 L42 36 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="5" fill={strokeColor} />
      </svg>
    );
  }

  if (variant === "sparkle") {
    // 4-point elongated diamond sparkle (classic 50s atomic accent)
    return (
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M50 0 C50 34 66 50 100 50 C66 50 50 66 50 100 C50 66 34 50 0 50 C34 50 50 34 50 0 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Classic Atomic 8-point retro starburst
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      {/* Radiating spine needles */}
      <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round">
        <line x1="60" y1="6" x2="60" y2="114" />
        <line x1="6" y1="60" x2="114" y2="60" />
        <line x1="22" y1="22" x2="98" y2="98" />
        <line x1="98" y1="22" x2="22" y2="98" />
        <line x1="38" y1="12" x2="82" y2="108" strokeWidth={strokeWidth * 0.8} />
        <line x1="12" y1="38" x2="108" y2="82" strokeWidth={strokeWidth * 0.8} />
        <line x1="108" y1="38" x2="12" y2="82" strokeWidth={strokeWidth * 0.8} />
        <line x1="82" y1="12" x2="38" y2="108" strokeWidth={strokeWidth * 0.8} />
      </g>
      {/* Outer atomic node balls */}
      <g fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth * 0.9}>
        <circle cx="60" cy="6" r="4.5" />
        <circle cx="60" cy="114" r="4.5" />
        <circle cx="6" cy="60" r="4.5" />
        <circle cx="114" cy="60" r="4.5" />
        <circle cx="22" cy="22" r="3.5" />
        <circle cx="98" cy="98" r="3.5" />
        <circle cx="98" cy="22" r="3.5" />
        <circle cx="22" cy="98" r="3.5" />
      </g>
      {/* Center core disc */}
      <circle
        cx="60"
        cy="60"
        r="14"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <circle cx="60" cy="60" r="4" fill={strokeColor} />
    </svg>
  );
}

export default Starburst;

