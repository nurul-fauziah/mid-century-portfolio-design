"use client";

import React from "react";

interface ZigZagProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  strokeWidth?: number;
  count?: number;
}

export function ZigZag({
  width = 120,
  height = 24,
  strokeColor = "var(--ink)",
  strokeWidth = 2.5,
  count = 6,
  className = "",
  ...props
}: ZigZagProps) {
  const step = 100 / count;
  let d = `M 0 12 `;
  for (let i = 0; i < count; i++) {
    const midX = i * step + step / 2;
    const endX = (i + 1) * step;
    d += `L ${midX} ${i % 2 === 0 ? 2 : 22} L ${endX} 12 `;
  }

  return (
    <svg
      viewBox="0 0 100 24"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <path
        d={d}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ZigZag;

