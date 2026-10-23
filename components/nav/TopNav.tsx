"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { useNav } from "./NavProvider";
import { mastheadLinks, sections, SectionId } from "./config";

export default function TopNav() {
  const { active, href, go } = useNav();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: SectionId) => {
    go(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-18 border-b-2 border-[color:var(--ink)] bg-[color:var(--paper)] transition-colors select-none">
      <div className="mx-auto flex h-full max-w-[1360px] items-center justify-between px-4 sm:px-8 md:pl-28">
        {/* Left: Logo "Zia." in bold geometric sans */}
        <a
          href={href("home")}
          onClick={() => handleLinkClick("home")}
          aria-label="Zia — Home"
          className="flex items-center gap-1 group py-1"
        >
          <span className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-[color:var(--ink)] group-hover:text-[color:var(--burnt)] transition-colors">
            Zia
          </span>
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[color:var(--burnt)]">
            .
          </span>
          <span className="hidden sm:inline-block ml-3 px-2 py-0.5 text-[0.65rem] font-mono font-bold uppercase tracking-widest border border-[color:var(--ink)] bg-[color:var(--mustard)] text-[#2B2118] rounded">
            EST. 2026
          </span>
        </a>

        {/* Center: Editorial Links (About / Projects / Blog) */}
        <nav
          aria-label="Editorial masthead links"
          className="hidden md:flex items-center gap-8 lg:gap-10"
        >
          {mastheadLinks.map(({ id, label }) => {
            const isActive = active === id;

            return (
              <a
                key={id}
                href={href(id)}
                onClick={() => handleLinkClick(id)}
                className={`relative py-1 font-heading text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[color:var(--burnt)]"
                    : "text-[color:var(--ink)] hover:text-[color:var(--burnt)]"
                }`}
              >
                <span>{label}</span>
                {isActive && (
                  <motion.span
                    layoutId="masthead-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-[color:var(--burnt)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Toggle & CTA "Let's talk ↗" */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          <a
            href={href("contact")}
            onClick={() => handleLinkClick("contact")}
            className="retro-btn !py-2 !px-4 sm:!px-5 text-xs sm:text-sm !bg-[color:var(--burnt)] !text-[#F6EFE0]"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle section index menu"
            aria-expanded={mobileOpen}
            className="grid size-10 place-items-center rounded-xl border-2 border-[color:var(--ink)] bg-[color:var(--surface)] text-[color:var(--ink)] shadow-[2.5px_2.5px_0_var(--ink)] md:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={20} strokeWidth={2.2} /> : <Menu size={20} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In / Dropdown Menu for all 7 numbered sections */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-6 py-6 overflow-hidden shadow-lg"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[color:var(--ink)]/20">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[color:var(--ink-muted)]">
                Index · 7 Sections
              </span>
              <span className="font-mono text-xs font-bold text-[color:var(--burnt)]">
                1940s–60s MOD
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {sections.map(({ id, num, label, icon: Icon }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={href(id)}
                    onClick={() => handleLinkClick(id)}
                    className={`flex items-center justify-between p-3 rounded-lg border-2 transition-all ${
                      isActive
                        ? "border-[color:var(--ink)] bg-[color:var(--mustard)] text-[#2B2118] font-bold shadow-[3px_3px_0_var(--ink)]"
                        : "border-transparent bg-[color:var(--surface-warm)] text-[color:var(--ink)] hover:border-[color:var(--ink)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold opacity-70">
                        {num}
                      </span>
                      <span className="font-heading text-sm uppercase tracking-wide">
                        {label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon size={16} strokeWidth={2} />
                      {isActive && (
                        <span className="size-2 rounded-full bg-[color:var(--burnt)]" />
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
