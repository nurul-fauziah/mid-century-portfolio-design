"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";
import {
  about,
  experience,
  posts,
  projects,
  site,
  skills,
} from "@/content/site";
import { techIcon } from "@/lib/tech-icons";
import {
  Boomerang,
  Starburst,
  HalfCircle,
  Arch,
  Blob,
  DotGrid,
  ZigZag,
  Squiggle,
  SectionDivider,
} from "./shapes";
import { ZLogo } from "./ZLogo";
import { midCenturyEase } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────────
   02 — PROFILE · ABOUT (Mustard dominant / Warm paper block)
   ───────────────────────────────────────────────────────────── */
export function Profile() {
  return (
    <section
      id="about"
      aria-label="About section"
      className="relative w-full bg-[color:var(--surface-warm)]/50 py-20 sm:py-28 lg:py-32 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      {/* Decorative Background Blob and Starburst */}
      <div className="absolute top-10 right-8 opacity-20 pointer-events-none hidden md:block">
        <Blob size={220} variant={2} fillColor="var(--mustard)" strokeColor="var(--ink)" />
      </div>

      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[color:var(--mustard)] text-[#2B2118] px-3 py-1 rounded border-2 border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
              02 — ABOUT
            </span>
            <span className="font-heading text-sm font-bold uppercase tracking-wider text-[color:var(--ink-muted)]">
              Background & Technical Approach
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Starburst size={28} variant="sparkle" fillColor="var(--mustard)" strokeColor="var(--ink)" />
            <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
              EST. 2026 · TANGERANG
            </span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1-5): Cut-Paper Arch Composition & Quick Vintage Badges */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start gap-8">
            {/* Visual Cut-Paper Portrait Frame */}
            <div className="relative w-full max-w-[340px] aspect-[4/5] mx-auto sm:mx-0">
              {/* Outer offset shadow border */}
              <div className="absolute inset-0 bg-[color:var(--mustard)] cut-paper-arch translate-x-2 translate-y-2 border-2.5 border-[color:var(--ink)]" />
              
              {/* Main Cut-Paper Container */}
              <div className="relative w-full h-full cut-paper-arch bg-[color:var(--surface)] border-2.5 border-[color:var(--ink)] p-6 flex flex-col justify-between items-center text-center">
                {/* Top starburst decoration */}
                <div className="flex justify-between w-full items-center">
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-[color:var(--ink-muted)]">
                    EDITION · 01
                  </span>
                  <Starburst size={24} variant="sparkle" fillColor="var(--burnt)" strokeColor="var(--ink)" />
                </div>

                {/* Center Calligraphy Monogram */}
                <div className="my-auto flex flex-col items-center">
                  <div className="p-4 rounded-2xl border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[3px_3px_0_var(--ink)]">
                    <ZLogo size={64} variant="animated" strokeColor="var(--ink)" fillColor="var(--ink)" />
                  </div>
                  <h3 className="font-heading text-lg font-black uppercase tracking-tight text-[color:var(--ink)] mt-4">
                    Nurul Fauziah
                  </h3>
                  <p className="font-mono text-xs text-[color:var(--burnt)] font-bold uppercase mt-0.5">
                    Full Stack Developer
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="w-full pt-3 border-t-2 border-[color:var(--ink)] flex justify-between text-[0.65rem] font-mono font-bold text-[color:var(--ink-muted)]">
                  <span>1+ YRS EXP</span>
                  <span>INFORMATICS GRADUATE</span>
                </div>
              </div>
            </div>

            {/* Vintage Spec Badges */}
            <div className="w-full max-w-[340px] grid grid-cols-2 gap-3 mx-auto sm:mx-0">
              <div className="p-4 border-2 border-[color:var(--ink)] bg-[color:var(--surface)] rounded-xl shadow-[3px_3px_0_var(--ink)]">
                <span className="font-mono text-[0.65rem] uppercase font-bold text-[color:var(--ink-muted)] block">
                  Experience
                </span>
                <span className="font-heading text-2xl font-black text-[color:var(--burnt)]">
                  {about.years}
                </span>
              </div>

              <div className="p-4 border-2 border-[color:var(--ink)] bg-[color:var(--surface)] rounded-xl shadow-[3px_3px_0_var(--ink)]">
                <span className="font-mono text-[0.65rem] uppercase font-bold text-[color:var(--ink-muted)] block">
                  Selected Projects
                </span>
                <span className="font-heading text-2xl font-black text-[color:var(--teal)]">
                  0{projects.length} Projects
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Bio & Technical Approach */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Bold Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[1.08] mb-6">
              {about.lead}
            </h2>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-[17px] leading-[1.75] text-[color:var(--ink-muted)] font-body">
              {about.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Education & Focus Areas Cards */}
            <div className="mt-8 p-5 border-2 border-[color:var(--ink)] bg-[color:var(--surface)] rounded-xl shadow-[3.5px_3.5px_0_var(--ink)] space-y-3">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[color:var(--burnt)]">
                  Education & Foundations:
                </span>
                <p className="font-body text-sm text-[color:var(--ink)] mt-1">
                  {about.education}
                </p>
              </div>

              <div className="pt-3 border-t border-[color:var(--ink)]/20">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[color:var(--teal)]">
                  Focus Areas:
                </span>
                <p className="font-body text-sm font-semibold text-[color:var(--ink)] mt-1">
                  {about.interests.join(" · ")}
                </p>
              </div>
            </div>

            {/* Core Stack Pills */}
            <div className="mt-8">
              <span className="font-mono text-xs uppercase tracking-wider text-[color:var(--ink-muted)] font-bold block mb-3">
                Core Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 10).map((tech) => (
                  <span key={tech} className="retro-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Retro Semicircles Divider */}
      <SectionDivider variant="semicircles" className="mt-16" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   03 — WORKS · PROJECTS (Teal dominant / Record Sleeve Cards)
   ───────────────────────────────────────────────────────────── */
export function Works() {
  return (
    <section
      id="projects"
      aria-label="Projects section"
      className="relative w-full bg-[color:var(--paper)] py-20 sm:py-28 lg:py-32 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[color:var(--teal)] text-[#F6EFE0] px-3 py-1 rounded border-2 border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
                03 — PROJECTS
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                0{projects.length} PROJECTS
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[0.95]">
              Selected Projects
            </h2>
          </div>

          <p className="max-w-[42ch] font-body text-sm sm:text-base text-[color:var(--ink-muted)]">
            Web applications and internal systems I have built, covering role-based platforms, content management, and dashboard refactoring.
          </p>
        </div>

        {/* Project Cards Styled like Mid-Century Record Sleeves & Poster Prints */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            // Rotating palette accent per card
            const paletteBorder =
              idx === 0
                ? "var(--burnt)"
                : idx === 1
                ? "var(--teal)"
                : "var(--mustard)";

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: midCenturyEase }}
                className="group relative flex flex-col justify-between border-2.5 border-[color:var(--ink)] bg-[color:var(--surface)] p-6 sm:p-7 rounded-2xl shadow-[5px_5px_0_var(--ink)] hover:shadow-[9px_9px_0_var(--ink)] hover:-translate-x-1 hover:-translate-y-1 hover:-rotate-0.5 transition-all duration-300"
              >
                <div>
                  {/* Record Sleeve Poster Header Illustration */}
                  <div
                    className="relative w-full aspect-[16/10] border-2 border-[color:var(--ink)] rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4"
                    style={{ backgroundColor: "var(--surface-warm)" }}
                  >
                    {/* Abstract Mid-Century Composition inside sleeve */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-90">
                      {idx === 0 && (
                        <div className="relative w-full h-full flex items-center justify-around">
                          <HalfCircle size={100} orientation="left" fillColor="var(--burnt)" strokeColor="var(--ink)" />
                          <DotGrid rows={4} cols={5} dotSize={3} gap={12} />
                          <Starburst size={54} variant="sparkle" fillColor="var(--mustard)" strokeColor="var(--ink)" />
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="relative w-full h-full flex items-center justify-around">
                          <Arch width={80} height={100} fillColor="var(--teal)" strokeColor="var(--ink)" />
                          <Boomerang size={90} fillColor="var(--mustard)" strokeColor="var(--ink)" />
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="relative w-full h-full flex items-center justify-around">
                          <Blob size={100} variant={1} fillColor="var(--olive)" strokeColor="var(--ink)" />
                          <Squiggle width={90} height={20} strokeWidth={2.5} />
                          <div className="size-10 rounded-full border-2 border-[color:var(--ink)] bg-[color:var(--pink)]" />
                        </div>
                      )}
                    </div>

                    {/* Badge on sleeve */}
                    <span className="relative z-10 font-mono text-[0.65rem] font-bold uppercase tracking-wider bg-[color:var(--paper)] text-[color:var(--ink)] px-2.5 py-1 rounded border border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
                      PROJECT 0{idx + 1} · {project.role}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-xs font-bold uppercase tracking-wider"
                      style={{ color: paletteBorder }}
                    >
                      {project.category}
                    </span>
                    <span className="font-mono text-[0.65rem] font-bold text-[color:var(--ink-muted)]">
                      0{idx + 1} / 0{projects.length}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-snug group-hover:text-[color:var(--burnt)] transition-colors">
                    {project.name}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-muted)] font-body line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech stack chips */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[0.68rem] font-mono font-bold uppercase border border-[color:var(--ink)]/40 rounded bg-[color:var(--surface-warm)] text-[color:var(--ink)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[0.68rem] font-mono font-bold text-[color:var(--ink-muted)]">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-6 pt-5 border-t-2 border-[color:var(--ink)]/20 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-heading text-xs font-bold uppercase tracking-wider text-[color:var(--ink)] group-hover:text-[color:var(--burnt)] transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </Link>

                  {/* External links if available */}
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Live demo for ${project.name}`}
                        className="p-1.5 rounded border border-[color:var(--ink)] hover:bg-[color:var(--mustard)] transition-colors"
                      >
                        <ExternalLink size={13} strokeWidth={2.2} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub repo for ${project.name}`}
                        className="p-1.5 rounded border border-[color:var(--ink)] hover:bg-[color:var(--mustard)] transition-colors"
                      >
                        <Github size={13} strokeWidth={2.2} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Retro Sawtooth / Zigzag Divider */}
      <SectionDivider variant="zigzag" className="mt-16" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   04 — STACK · SKILLS (ONE Flat Grid with Geometric Tiles)
   ───────────────────────────────────────────────────────────── */
export function Stack() {
  // Rotating shape styles for mid-century variety:
  // 0: rounded-2xl (rounded square)
  // 1: rounded-full (circle)
  // 2: rounded-t-full rounded-b-md (arch)
  // 3: rounded-b-full rounded-t-md (inverted arch)
  const shapes = [
    "rounded-2xl",
    "rounded-full",
    "rounded-t-full rounded-b-lg",
    "rounded-b-full rounded-t-lg",
  ];

  // Rotating palette colors
  const paletteColors = [
    { bg: "bg-[color:var(--mustard)]/20", border: "border-[color:var(--mustard)]", text: "text-[#2B2118]" },
    { bg: "bg-[color:var(--burnt)]/20", border: "border-[color:var(--burnt)]", text: "text-[color:var(--burnt)]" },
    { bg: "bg-[color:var(--teal)]/20", border: "border-[color:var(--teal)]", text: "text-[color:var(--teal)]" },
    { bg: "bg-[color:var(--navy)]/20", border: "border-[color:var(--navy)]", text: "text-[color:var(--navy)]" },
    { bg: "bg-[color:var(--olive)]/20", border: "border-[color:var(--olive)]", text: "text-[color:var(--olive)]" },
    { bg: "bg-[color:var(--pink)]/30", border: "border-[color:var(--pink)]", text: "text-[color:var(--ink)]" },
  ];

  return (
    <section
      id="skills"
      aria-label="Skills and Tech Stack section"
      className="relative w-full bg-[color:var(--surface-warm)]/40 py-20 sm:py-28 lg:py-32 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[color:var(--navy)] text-[#F6EFE0] px-3 py-1 rounded border-2 border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
                04 — SKILLS
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                TECHNICAL TOOLKIT
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[0.95]">
              Technologies &amp; Tools
            </h2>
          </div>

          <p className="max-w-[44ch] font-body text-sm sm:text-base text-[color:var(--ink-muted)]">
            Languages, frameworks, databases, and development tools I use when building web applications.
          </p>
        </div>

        {/* ONE Single Flat Grid of Official Tech Logos with Geometric Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-5">
          {skills.map((skillName, idx) => {
            const iconData = techIcon(skillName);
            const shapeClass = shapes[idx % shapes.length];
            const colorClass = paletteColors[idx % paletteColors.length];

            return (
              <motion.div
                key={skillName}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 7) * 0.05, ease: midCenturyEase }}
                className={`group relative flex flex-col items-center justify-center p-4 sm:p-5 border-2 border-[color:var(--ink)] bg-[color:var(--surface)] shadow-[3.5px_3.5px_0_var(--ink)] hover:shadow-[6px_6px_0_var(--ink)] hover:-translate-x-1 hover:-translate-y-1 hover:rotate-1 transition-all duration-200 cursor-default select-none ${shapeClass}`}
              >
                {/* Geometric Tile Badge for Icon */}
                <div
                  className={`size-12 sm:size-14 grid place-items-center rounded-xl border border-[color:var(--ink)]/40 mb-3 transition-transform duration-200 group-hover:scale-110 ${colorClass.bg}`}
                >
                  {iconData ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="size-6 sm:size-7 fill-current"
                      style={{ color: iconData.color || "var(--ink)" }}
                      aria-hidden="true"
                    >
                      <title>{iconData.title}</title>
                      <path d={iconData.path} />
                    </svg>
                  ) : (
                    <span className="font-heading font-black text-sm">
                      {skillName.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Skill Name */}
                <span className="font-heading text-xs sm:text-sm font-bold text-[color:var(--ink)] text-center tracking-tight leading-tight">
                  {skillName}
                </span>

                {/* Tile numbering */}
                <span className="font-mono text-[0.6rem] font-bold text-[color:var(--ink-muted)] mt-1 opacity-75">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Retro Dot Row Divider */}
      <SectionDivider variant="dots" className="mt-16" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   05 — HISTORY · EXPERIENCE (Olive green / Geometric Timeline)
   ───────────────────────────────────────────────────────────── */
export function History() {
  return (
    <section
      id="experience"
      aria-label="Experience section"
      className="relative w-full bg-[color:var(--paper)] py-20 sm:py-28 lg:py-32 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[color:var(--olive)] text-[#F6EFE0] px-3 py-1 rounded border-2 border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
                05 — EXPERIENCE
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                WORK HISTORY
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[0.95]">
              Work History
            </h2>
          </div>

          <p className="max-w-[42ch] font-body text-sm sm:text-base text-[color:var(--ink-muted)]">
            My experience developing internal tools, database models, and web features in production environments.
          </p>
        </div>

        {/* Vertical Timeline with Geometric Nodes & Bold Year Labels */}
        <div className="relative border-l-2.5 border-[color:var(--ink)] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12 sm:space-y-16">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: idx * 0.15, ease: midCenturyEase }}
              className="relative"
            >
              {/* Geometric Node on the Timeline Rail */}
              <div className="absolute -left-[35px] sm:-left-[59px] top-1.5 size-6 sm:size-7 rounded-full border-2.5 border-[color:var(--ink)] bg-[color:var(--mustard)] shadow-[2px_2px_0_var(--ink)] flex items-center justify-center">
                <span className="size-2 rounded-full bg-[color:var(--ink)]" />
              </div>

              {/* Bold Year & Date Header */}
              <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <span className="font-heading text-3xl sm:text-4xl font-black text-[color:var(--burnt)]">
                  {item.dates.split("–")[0].trim()}
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[color:var(--ink-muted)]">
                  / {item.dates}
                </span>
              </div>

              {/* Experience Card Sleeve */}
              <div className="p-6 sm:p-8 border-2.5 border-[color:var(--ink)] bg-[color:var(--surface)] rounded-2xl shadow-[5px_5px_0_var(--ink)] max-w-4xl">
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 mb-4 border-b-2 border-[color:var(--ink)]/20">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-[color:var(--ink)]">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm font-bold text-[color:var(--teal)] uppercase mt-0.5">
                      {item.org}
                    </p>
                  </div>

                  <span className="font-mono text-xs font-bold px-2.5 py-1 bg-[color:var(--surface-warm)] border border-[color:var(--ink)] rounded">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                {/* Responsibilities list with geometric bullet points */}
                <ul className="space-y-3 font-body text-sm sm:text-base text-[color:var(--ink-muted)] leading-relaxed">
                  {item.resp.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <span className="size-2 rounded-full bg-[color:var(--burnt)] shrink-0 mt-2 border border-[color:var(--ink)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Reflection Note */}
                {item.note && (
                  <p className="mt-5 p-3.5 border-l-3 border-[color:var(--olive)] bg-[color:var(--surface-warm)]/60 font-body text-xs sm:text-sm italic text-[color:var(--ink)] rounded-r">
                    &ldquo;{item.note}&rdquo;
                  </p>
                )}

                {/* Tech pills */}
                <div className="mt-5 pt-4 border-t border-[color:var(--ink)]/20 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span key={t} className="retro-tag text-[0.7rem]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Retro Stripes Divider */}
      <SectionDivider variant="stripes" className="mt-16" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   06 — WRITING · BLOG (Cobalt Navy / Magazine Editorial List)
   ───────────────────────────────────────────────────────────── */
export function Writing() {
  return (
    <section
      id="blog"
      aria-label="Blog and Writings section"
      className="relative w-full bg-[color:var(--surface-warm)]/40 py-20 sm:py-28 lg:py-32 border-b-2 border-[color:var(--ink)] overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] bg-[color:var(--navy)] text-[#F6EFE0] px-3 py-1 rounded border-2 border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]">
                06 — JOURNAL
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                NOTES &amp; REFLECTIONS
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[color:var(--ink)] leading-[0.95]">
              Articles &amp; Notes
            </h2>
          </div>

          <p className="max-w-[42ch] font-body text-sm sm:text-base text-[color:var(--ink-muted)]">
            Short notes on software development, database design, and building usable tools.
          </p>
        </div>

        {/* Editorial Magazine-Style List with Big Numbering */}
        <div className="border-t-2 border-[color:var(--ink)] divide-y-2 divide-[color:var(--ink)]">
          {posts.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: midCenturyEase }}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[color:var(--surface)] px-4 sm:px-6 rounded-xl transition-all duration-200"
            >
              <div className="flex items-start gap-6 sm:gap-10">
                {/* Big Numbering */}
                <span className="font-heading text-4xl sm:text-5xl font-black text-[color:var(--ink)]/40 group-hover:text-[color:var(--burnt)] transition-colors shrink-0">
                  0{idx + 1}
                </span>

                {/* Article Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="text-[color:var(--burnt)]">{post.category}</span>
                    <span className="text-[color:var(--ink-muted)]">·</span>
                    <span className="text-[color:var(--ink-muted)]">{post.date}</span>
                    <span className="text-[color:var(--ink-muted)]">·</span>
                    <span className="text-[color:var(--ink-muted)]">{post.minutes} MIN READ</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--burnt)] transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-2 font-body text-sm sm:text-base text-[color:var(--ink-muted)] max-w-3xl leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Arrow Pill Link */}
              <div className="shrink-0 md:self-center pl-16 md:pl-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="retro-btn !py-2.5 !px-5 text-xs sm:text-sm !bg-[color:var(--mustard)] !text-[#2B2118]"
                >
                  <span>Read Article</span>
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Retro Semicircles Divider */}
      <SectionDivider variant="semicircles" className="mt-16" />
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   07 — CONTACT · LET'S TALK (Burnt Orange / Atomic Starburst)
   ───────────────────────────────────────────────────────────── */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      company: formData.get("company") as string, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to send message.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : `Please email directly at ${site.email}`
      );
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact section"
      className="relative w-full bg-[color:var(--paper)] py-20 sm:py-28 lg:py-32 overflow-hidden transition-colors md:pl-20 lg:pl-24"
    >
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 relative z-10">
        {/* Main Bold Mid-Century CTA Container */}
        <div className="relative border-3 border-[color:var(--ink)] bg-[color:var(--burnt)] p-8 sm:p-12 lg:p-16 rounded-3xl shadow-[8px_8px_0_var(--ink)] text-[#F6EFE0] overflow-hidden">
          {/* Rotating Atomic Starburst in Background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            className="absolute -right-16 -top-16 opacity-25 pointer-events-none hidden sm:block"
          >
            <Starburst size={320} variant="atomic" strokeColor="#F6EFE0" fillColor="#F6EFE0" />
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 relative z-10">
            {/* Left Column (Cols 1-6): Poster CTA & Contact Details */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[color:var(--mustard)] border-2 border-[color:var(--ink)] text-[#2B2118] font-mono text-xs font-bold uppercase rounded-md shadow-[2px_2px_0_var(--ink)] mb-6">
                  <span>07 — GET IN TOUCH</span>
                </div>

                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.95] text-[#F6EFE0]">
                  Let&apos;s talk about building software.
                </h2>

                <p className="mt-5 font-body text-base sm:text-lg text-[#F6EFE0]/90 max-w-lg leading-relaxed">
                  I am open to Full Stack Developer opportunities, engineering roles, and collaborative projects. Feel free to reach out directly by email or form.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="mt-10 pt-8 border-t-2 border-[#F6EFE0]/30 space-y-4">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 font-mono text-sm sm:text-base font-bold text-[#F6EFE0] hover:text-[color:var(--mustard)] transition-colors"
                >
                  <Mail size={18} strokeWidth={2.2} />
                  <span>{site.email}</span>
                </a>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[#2B2118] font-mono text-xs font-bold uppercase shadow-[2.5px_2.5px_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--ink)] transition-all"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[#2B2118] font-mono text-xs font-bold uppercase shadow-[2.5px_2.5px_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_var(--ink)] transition-all"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                  </a>

                  <span className="font-mono text-xs text-[#F6EFE0]/80">
                    · {site.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Cols 7-12): Clean Mid-Century Form */}
            <div className="lg:col-span-6 bg-[color:var(--surface)] text-[color:var(--ink)] p-6 sm:p-8 rounded-2xl border-2.5 border-[color:var(--ink)] shadow-[6px_6px_0_var(--ink)]">
              {status === "success" ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="size-14 rounded-full bg-[color:var(--teal)] text-[#F6EFE0] grid place-items-center mb-4 border-2 border-[color:var(--ink)] shadow-[3px_3px_0_var(--ink)]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-black uppercase text-[color:var(--ink)]">
                    Message Received!
                  </h3>
                  <p className="font-body text-sm text-[color:var(--ink-muted)] mt-2 max-w-sm">
                    Thank you for reaching out. I&apos;ll get back to you promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="retro-btn !bg-[color:var(--mustard)] !text-[#2B2118] mt-6 !py-2 !px-5 text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for bot protection */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="font-mono text-xs font-bold uppercase tracking-wider block text-[color:var(--ink)] mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[color:var(--ink)] font-body text-sm shadow-[2.5px_2.5px_0_var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--mustard)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="font-mono text-xs font-bold uppercase tracking-wider block text-[color:var(--ink)] mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[color:var(--ink)] font-body text-sm shadow-[2.5px_2.5px_0_var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--mustard)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="font-mono text-xs font-bold uppercase tracking-wider block text-[color:var(--ink)] mb-1"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project opportunity / Inquiry"
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[color:var(--ink)] font-body text-sm shadow-[2.5px_2.5px_0_var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--mustard)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="font-mono text-xs font-bold uppercase tracking-wider block text-[color:var(--ink)] mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project, timeline, or idea..."
                      className="w-full px-4 py-2.5 rounded-lg border-2 border-[color:var(--ink)] bg-[color:var(--paper)] text-[color:var(--ink)] font-body text-sm shadow-[2.5px_2.5px_0_var(--ink)] focus:outline-none focus:ring-2 focus:ring-[color:var(--mustard)] resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="font-mono text-xs font-bold text-[color:var(--burnt)] bg-[color:var(--mustard)]/20 p-2.5 rounded border border-[color:var(--burnt)]">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full retro-btn !bg-[color:var(--mustard)] !text-[#2B2118] !py-3 font-black text-sm tracking-wide mt-2"
                  >
                    {status === "sending" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER · RETRO COLOPHON
   ───────────────────────────────────────────────────────────── */
export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full border-t-2 border-[color:var(--ink)] bg-[color:var(--surface-warm)]/80 py-12 transition-colors md:pl-20 lg:pl-24 select-none">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg border border-[color:var(--ink)] bg-[color:var(--mustard)] shadow-[2px_2px_0_var(--ink)]">
            <ZLogo size={24} variant="mark" strokeColor="var(--ink)" fillColor="#2B2118" decorative />
          </div>
          <div>
            <span className="font-heading text-lg font-black uppercase tracking-tight text-[color:var(--ink)]">
              {site.name}
            </span>
            <p className="font-mono text-[0.68rem] text-[color:var(--ink-muted)]">
              © {new Date().getFullYear()} · Full Stack Developer · Tangerang, Indonesia
            </p>
          </div>
        </div>

        {/* Center Vintage Badge */}
        <div className="hidden md:flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[color:var(--ink-muted)]">
          <span>FULL STACK DEVELOPER</span>
          <span className="text-[color:var(--burnt)]">✦</span>
          <span>NEXT.JS · LARAVEL · NESTJS</span>
        </div>

        {/* Right: Back to Top Pill Button */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="retro-btn-outline !py-2 !px-4 text-xs font-bold"
        >
          <span>Top</span>
          <ArrowUp size={14} strokeWidth={2.5} />
        </button>
      </div>
    </footer>
  );
}
