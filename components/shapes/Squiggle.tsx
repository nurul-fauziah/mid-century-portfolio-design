"use client";

import React from "react";

interface SquiggleProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  strokeColor?: string;
  strokeWidth?: number;
  waves?: number;
}

export function Squiggle({
  width = 140,
  height = 20,
  strokeColor = "var(--ink)",
  strokeWidth = 2.5,
  waves = 4,
  className = "",
  ...props
}: SquiggleProps) {
  const step = 100 / waves;
  let d = `M 0 10 `;
  for (let i = 0; i < waves; i++) {
    const x0 = i * step;
    const x1 = x0 + step * 0.25;
    const x2 = x0 + step * 0.75;
    const x3 = (i + 1) * step;
    d += `C ${x1} ${i % 2 === 0 ? 0 : 20}, ${x2} ${i % 2 === 0 ? 0 : 20}, ${x3} 10 `;
  }

  return (
    <svg
      viewBox="0 0 100 20"
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
      />
    </svg>
  );
}

export default Squiggle;

