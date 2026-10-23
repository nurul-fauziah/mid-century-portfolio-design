"use client";

import React from "react";

interface BlobProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  variant?: 1 | 2 | 3;
}

export function Blob({
  size = 140,
  fillColor = "currentColor",
  strokeColor = "var(--ink)",
  strokeWidth = 2,
  variant = 1,
  className = "",
  ...props
}: BlobProps) {
  // Variant 1: Classic Noguchi / Eames organic amoeba shape
  if (variant === 1) {
    return (
      <svg
        viewBox="0 0 160 140"
        width={size}
        height={typeof size === "number" ? (size * 140) / 160 : size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M32 40 C14 62, 10 98, 38 120 C68 142, 116 138, 138 112 C160 86, 154 44, 126 22 C98 0, 50 18, 32 40 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Variant 2: Kidney bean table profile
  if (variant === 2) {
    return (
      <svg
        viewBox="0 0 160 110"
        width={size}
        height={typeof size === "number" ? (size * 110) / 160 : size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M20 55 C12 85, 42 102, 85 100 C130 98, 155 75, 148 40 C140 10, 95 12, 70 28 C50 40, 28 25, 20 55 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // Variant 3: Triangular softened retro plectrum
  return (
    <svg
      viewBox="0 0 140 140"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M70 12 C104 22, 132 58, 122 96 C112 134, 62 138, 30 116 C-2 94, 2 54, 30 28 C42 16, 56 8, 70 12 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Blob;

