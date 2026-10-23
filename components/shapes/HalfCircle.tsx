"use client";

import React from "react";

interface HalfCircleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  orientation?: "top" | "bottom" | "left" | "right";
}

export function HalfCircle({
  size = 100,
  fillColor = "currentColor",
  strokeColor = "var(--ink)",
  strokeWidth = 2,
  orientation = "top",
  className = "",
  ...props
}: HalfCircleProps) {
  // Base dimensions 100x50 or 50x100
  if (orientation === "top") {
    return (
      <svg
        viewBox="0 0 100 50"
        width={size}
        height={typeof size === "number" ? size / 2 : size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M0 50 A50 50 0 0 1 100 50 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (orientation === "bottom") {
    return (
      <svg
        viewBox="0 0 100 50"
        width={size}
        height={typeof size === "number" ? size / 2 : size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M0 0 A50 50 0 0 0 100 0 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (orientation === "left") {
    return (
      <svg
        viewBox="0 0 50 100"
        width={typeof size === "number" ? size / 2 : size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 select-none ${className}`}
        aria-hidden="true"
        {...props}
      >
        <path
          d="M50 0 A50 50 0 0 0 50 100 Z"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // "right"
  return (
    <svg
      viewBox="0 0 50 100"
      width={typeof size === "number" ? size / 2 : size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 0 A50 50 0 0 1 0 100 Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HalfCircle;

