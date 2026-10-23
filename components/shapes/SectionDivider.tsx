"use client";

import React from "react";

interface SectionDividerProps {
  variant?: "semicircles" | "dots" | "zigzag" | "stripes" | "blocks";
  strokeColor?: string;
  fillColor?: string;
  className?: string;
  count?: number;
}

export function SectionDivider({
  variant = "semicircles",
  strokeColor = "var(--ink)",
  fillColor = "var(--mustard)",
  className = "",
  count = 24,
}: SectionDividerProps) {
  if (variant === "semicircles") {
    // Repeating scalloped semicircles along the boundary
    return (
      <div
        className={`w-full overflow-hidden flex items-center justify-center py-2 select-none ${className}`}
        aria-hidden="true"
      >
        <div className="flex gap-1 items-center">
          {Array.from({ length: count }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 24 12"
              className="w-6 h-3 shrink-0"
              fill="none"
            >
              <path
                d="M 0 12 A 12 12 0 0 1 24 12"
                stroke={strokeColor}
                strokeWidth="2"
                fill={i % 3 === 0 ? fillColor : "none"}
              />
            </svg>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div
        className={`w-full overflow-hidden flex items-center justify-center py-3 select-none ${className}`}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3">
          {Array.from({ length: count }).map((_, i) => (
            <span
              key={i}
              className="size-1.5 rounded-full"
              style={{
                backgroundColor:
                  i % 4 === 0
                    ? "var(--burnt)"
                    : i % 4 === 1
                    ? "var(--mustard)"
                    : i % 4 === 2
                    ? "var(--teal)"
                    : "var(--ink)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "zigzag") {
    return (
      <div
        className={`w-full overflow-hidden flex items-center justify-center py-2 select-none ${className}`}
        aria-hidden="true"
      >
        <div className="flex items-center">
          {Array.from({ length: count }).map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 20 10"
              className="w-5 h-2.5 shrink-0"
              fill="none"
            >
              <path
                d="M 0 10 L 10 0 L 20 10"
                stroke={strokeColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>
    );
  }

  // "stripes" / "blocks"
  return (
    <div
      className={`w-full h-3 border-y-2 border-ink flex overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: count * 2 }).map((_, i) => (
        <div
          key={i}
          className="flex-1 h-full"
          style={{
            backgroundColor:
              i % 4 === 0
                ? "var(--mustard)"
                : i % 4 === 1
                ? "var(--burnt)"
                : i % 4 === 2
                ? "var(--teal)"
                : "var(--olive)",
          }}
        />
      ))}
    </div>
  );
}

export default SectionDivider;

