"use client";

import { motion } from "motion/react";
import { Download, ArrowDown, Sparkles } from "lucide-react";
import { site } from "@/content/site";
import { Boomerang } from "./shapes/Boomerang";
import { Starburst } from "./shapes/Starburst";
import { HalfCircle } from "./shapes/HalfCircle";
import { Arch } from "./shapes/Arch";
import { DotGrid } from "./shapes/DotGrid";
import { Squiggle } from "./shapes/Squiggle";
import { ZLogo } from "./ZLogo";
import { midCenturyEase } from "@/lib/motion";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Home section"
      className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center bg-[color:var(--paper)] py-16 sm:py-24 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      {/* Background Decorative Atomic Pattern & DotGrid */}
      <div className="absolute top-8 right-12 opacity-35 pointer-events-none hidden sm:block">
        <DotGrid rows={6} cols={10} dotSize={3.5} gap={16} />
      </div>

      <div className="absolute -bottom-10 left-10 opacity-20 pointer-events-none hidden lg:block">
        <Squiggle width={240} height={36} strokeWidth={3} />
      </div>

      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (Cols 1-7): Oversized Vintage Poster Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Location Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: midCenturyEase }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                Portfolio · Based in {site.location}
              </span>
            </motion.div>

            {/* Oversized Poster Typography */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: midCenturyEase }}
            >
              <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[0.92]">
                Nurul
                <br />
                <span className="text-[color:var(--burnt)]">Fauziah</span>
              </h1>
            </motion.div>

            {/* Role & Tagline with Mid-Century Accent Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: midCenturyEase }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[color:var(--mustard)] border-2 border-[color:var(--ink)] shadow-[2.5px_2.5px_0_var(--ink)] rounded-md">
                <span className="size-2 rounded-full bg-[color:var(--ink)]" />
                <span className="font-heading text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#2B2118]">
                  {site.title}
                </span>
              </div>
              <span className="font-mono text-xs text-[color:var(--ink-muted)] font-bold uppercase">
                {site.tagline}
              </span>
            </motion.div>

            {/* Editorial Lead Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: midCenturyEase }}
              className="mt-6 max-w-[54ch] text-base sm:text-lg leading-[1.7] text-[color:var(--ink-muted)] font-body"
            >
              {site.intro}
            </motion.p>

            {/* Action Buttons: Retro pill with hard shadow & outline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: midCenturyEase }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={site.resume}
                download
                className="retro-btn !bg-[color:var(--mustard)] !text-[#2B2118] !py-3 !px-6 text-sm"
              >
                <Download size={16} strokeWidth={2.5} />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="retro-btn-outline !py-3 !px-6 text-sm"
              >
                <ArrowDown size={16} strokeWidth={2.5} />
                <span>Selected Works</span>
              </a>
            </motion.div>

            {/* Opportunity Status Pill with Atomic Sparkle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex items-center gap-2.5 text-xs font-mono font-bold text-[color:var(--ink-muted)]"
            >
              <span className="relative flex size-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--teal)] opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-[color:var(--teal)]" />
              </span>
              <span>{site.available.label}</span>
            </motion.div>
          </div>

          {/* Right Column (Cols 8-12): Mid-Century Geometric Collage */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: midCenturyEase }}
              className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center"
            >
              {/* Layer 1: Background Warm Arch Shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] sm:w-[340px] h-[380px] sm:h-[440px] cut-paper-arch bg-[color:var(--surface-warm)] border-2.5 border-[color:var(--ink)] shadow-[8px_8px_0_var(--ink)] relative overflow-hidden">
                  {/* Subtle retro horizontal lines inside arch */}
                  <div className="absolute inset-0 opacity-15 flex flex-col justify-between py-6">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-0.5 bg-[color:var(--ink)] w-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Layer 2: Big Mustard HalfCircle overlapping arch */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 sm:-left-8 z-10"
              >
                <HalfCircle
                  size={150}
                  orientation="top"
                  fillColor="var(--mustard)"
                  strokeColor="var(--ink)"
                  strokeWidth={2.5}
                />
              </motion.div>

              {/* Layer 3: Burnt Orange Boomerang drifting */}
              <motion.div
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-4 sm:-right-6 z-20"
              >
                <Boomerang
                  size={160}
                  fillColor="var(--burnt)"
                  strokeColor="var(--ink)"
                  strokeWidth={2.5}
                />
              </motion.div>

              {/* Layer 4: Rotating Atomic Starburst */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-2 sm:right-0 z-30"
              >
                <Starburst
                  size={90}
                  variant="atomic"
                  fillColor="var(--teal)"
                  strokeColor="var(--ink)"
                  strokeWidth={2}
                />
              </motion.div>

              {/* Layer 5: Center Poster Monogram & Typography */}
              <div className="relative z-25 flex flex-col items-center justify-center text-center p-4">
                <ZLogo
                  size={76}
                  variant="animated"
                  strokeColor="var(--ink)"
                  fillColor="var(--ink)"
                  title="Z Monogram"
                />
                <span className="font-heading text-base font-black uppercase tracking-wider text-[color:var(--ink)] mt-3">
                  Nurul Fauziah
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[color:var(--burnt)] mt-1">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
