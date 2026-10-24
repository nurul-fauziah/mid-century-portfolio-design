"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ZLogo } from "./ZLogo";
import { Starburst } from "./shapes/Starburst";

export default function Intro() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);

  const finish = useCallback(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dataset.intro = "done";
      window.dispatchEvent(new Event("intro-done"));
    }
    setShow(false);
  }, []);

  const triggerClose = useCallback(() => {
    if (closing) return;
    setClosing(true);
    setTimeout(finish, 650);
  }, [closing, finish]);

  useEffect(() => {
    const shouldSkip =
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        Boolean(sessionStorage.getItem("intro_seen")) ||
        new URLSearchParams(window.location.search).get("nointro") === "1");

    if (shouldSkip) {
      finish();
      return;
    }

    setShow(true);

    try {
      sessionStorage.setItem("intro_seen", "1");
    } catch {
      // Ignore storage errors in private browsing
    }

    // Hold for relaxed mid-century timing (1000ms), then reveal
    const timer = setTimeout(() => {
      triggerClose();
    }, 1100);

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        triggerClose();
      }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKey);
    };
  }, [finish, triggerClose]);

  if (!show) return null;

  return (
    <AnimatePresence>
      <div
        role="region"
        aria-label="Opening transition"
        onClick={triggerClose}
        className="fixed inset-0 z-[100] cursor-pointer pointer-events-auto select-none overflow-hidden"
      >
        {/* Left Retro Panel: Cream paper with bold right border */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: closing ? "-100%" : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-0 w-1/2 bg-[color:var(--paper)] border-r-2 border-[color:var(--ink)] flex items-center justify-end overflow-hidden"
        >
          {/* Subtle atomic starburst background accent */}
          <div className="absolute left-6 bottom-6 opacity-20 pointer-events-none">
            <Starburst size={160} strokeColor="var(--ink)" fillColor="var(--mustard)" />
          </div>
        </motion.div>

        {/* Right Retro Panel: Cream paper with bold left border */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: closing ? "100%" : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 right-0 w-1/2 bg-[color:var(--paper)] border-l-2 border-[color:var(--ink)] flex items-center justify-start overflow-hidden"
        >
          {/* Decorative geometric color block */}
          <div className="absolute right-6 top-6 opacity-20 pointer-events-none">
            <div className="w-32 h-32 rounded-full border-2 border-[color:var(--ink)] bg-[color:var(--burnt)]" />
          </div>
        </motion.div>

        {/* Center Cut-Paper Badge with Animated Calligraphy Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{
            opacity: closing ? 0 : 1,
            scale: closing ? 1.05 : 1,
            y: closing ? -15 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
        >
          {/* Mid-Century Poster Badge Container */}
          <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 border-2.5 border-[color:var(--ink)] bg-[color:var(--mustard)] shadow-[6px_6px_0_var(--ink)] rounded-2xl max-w-xs mx-4 text-center">
            {/* Corner Starburst */}
            <div className="absolute -top-4 -right-4">
              <Starburst size={36} variant="sparkle" fillColor="var(--burnt)" strokeColor="var(--ink)" />
            </div>

            {/* Sub-label */}
            <p className="font-mono text-xs text-[#2B2118] font-bold mb-3">
              Est. 2026
            </p>

            {/* Animated Calligraphy Z Logo */}
            <div className="my-2 p-2 flex items-center justify-center">
              <ZLogo
                size={68}
                variant="animated"
                strokeColor="var(--ink)"
                fillColor="var(--ink)"
                title="Z Monogram"
              />
            </div>

            {/* Poster title */}
            <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight text-[#2B2118] mt-2">
              Nurul Fauziah
            </h2>

            <p className="font-body text-xs text-[#2B2118]/80 font-medium tracking-wide mt-1">
              Full Stack Developer
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
