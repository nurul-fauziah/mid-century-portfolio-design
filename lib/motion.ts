// Mid-Century Modern relaxed, organic motion language
// Warm, calm, and natural tempo with gentle springs and easeOut curves

export const midCenturyEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const ease = midCenturyEase;

export const relaxedSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
  mass: 1,
};
export const spring = relaxedSpring;

export const gentleSpring = {
  type: "spring" as const,
  stiffness: 180,
  damping: 24,
};

// Reusable cut-paper slide & fade-in reveal variant
export const paperReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      delay: i * 0.12,
      ease: midCenturyEase,
    },
  }),
};

// Slow rotation for atomic starbursts
export const starburstSpin = {
  rotate: [0, 360],
  transition: {
    duration: 55,
    repeat: Infinity,
    ease: "linear",
  },
};

// Subtle drift for boomerangs and organic blobs
export const organicDrift = {
  y: [0, -8, 0],
  rotate: [0, 1.5, 0],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Hover lift with hard-shadow shift and subtle 1-2° rotation
export const cardHoverMotion = {
  rest: {
    x: 0,
    y: 0,
    rotate: 0,
    boxShadow: "4px 4px 0 var(--ink)",
    transition: { duration: 0.25, ease: midCenturyEase },
  },
  hover: {
    x: -3,
    y: -3,
    rotate: -1,
    boxShadow: "8px 8px 0 var(--ink)",
    transition: { duration: 0.25, ease: midCenturyEase },
  },
};
