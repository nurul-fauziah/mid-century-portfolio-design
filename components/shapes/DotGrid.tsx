"use client";

import React from "react";

interface DotGridProps extends React.SVGProps<SVGSVGElement> {
  rows?: number;
  cols?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
}

export function DotGrid({
  rows = 5,
  cols = 8,
  dotSize = 3,
  gap = 14,
  color = "var(--ink)",
  className = "",
  ...props
}: DotGridProps) {
  const width = cols * gap;
  const height = rows * gap;

  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * gap + gap / 2}
          cy={r * gap + gap / 2}
          r={dotSize}
          fill={color}
        />
      );
    }
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none opacity-40 ${className}`}
      aria-hidden="true"
      {...props}
    >
      {dots}
    </svg>
  );
}

export default DotGrid;

