"use client";

import React from "react";

interface ArchProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  inverted?: boolean;
}

export function Arch({
  width = 120,
  height = 180,
  fillColor = "currentColor",
  strokeColor = "var(--ink)",
  strokeWidth = 2.5,
  inverted = false,
  className = "",
  ...props
}: ArchProps) {
  // Arch with width=100, height=150. Top half is semicircle radius 50 (from y=50 to y=0 to y=50), bottom half is rectangle to y=150
  if (inverted) {
    return (
      <svg
        viewBox="0 0 100 150"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M0 0 L100 0 L100 100 A50 50 0 0 1 0 100 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 100 150"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 150 L0 50 A50 50 0 0 1 100 50 L100 150 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Arch;

