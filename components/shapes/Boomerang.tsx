"use client";

import React from "react";

interface BoomerangProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export function Boomerang({
  size = 120,
  fillColor = "currentColor",
  strokeColor = "var(--ink)",
  strokeWidth = 2.5,
  className = "",
  ...props
}: BoomerangProps) {
  return (
    <svg
      viewBox="0 0 160 120"
      width={size}
      height={typeof size === "number" ? (size * 120) / 160 : size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 95 C28 42, 68 18, 148 14 C120 44, 98 76, 88 106 C80 114, 68 116, 58 110 C44 98, 26 102, 12 95 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Boomerang;

