"use client";

import { motion } from "motion/react";
import { sections, SectionId } from "./config";
import { useNav } from "./NavProvider";

export default function SideNav() {
  const { active, href, go } = useNav();

  return (
    <>
      {/* ─── Desktop Vertical Mid-Century Index Tab (Left Fixed Rail) ─── */}
      <aside
        aria-label="Mid-Century Section Index"
        className="hidden md:flex fixed left-0 top-0 bottom-0 w-20 lg:w-24 flex-col items-center justify-between py-6 z-45 border-r-2 border-[color:var(--ink)] bg-[color:var(--paper)] select-none transition-colors"
      >
        {/* Top Rail Header: Index Tab Motif */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[color:var(--ink)] [writing-mode:vertical-rl] rotate-180">
            INDEX · 1950s
          </span>
          <div className="w-4 h-0.5 bg-[color:var(--ink)] mt-2" />
        </div>

        {/* Center: 7 Numbered Section Entries with Geometric Marker */}
        <nav className="flex flex-col items-center gap-2.5 lg:gap-3 w-full px-2">
          {sections.map(({ id, num, label, icon: Icon }) => {
            const isActive = active === id;

            return (
              <a
                key={id}
                href={href(id)}
                onClick={() => go(id)}
                aria-label={`${num} — ${label}`}
                aria-current={isActive ? "true" : undefined}
                className={`group relative flex items-center justify-center w-full py-1.5 px-1 rounded-lg transition-all ${
                  isActive
                    ? "text-[color:var(--ink)] font-bold"
                    : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
                }`}
              >
                {/* Active Geometric Marker: Half-Circle Tab on left border */}
                {isActive && (
                  <motion.span
                    layoutId="side-rail-marker"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute -left-2 top-1/2 -translate-y-1/2 w-2.5 h-5 bg-[color:var(--burnt)] rounded-r-full border-r-2 border-y-2 border-[color:var(--ink)]"
                  />
                )}

                {/* Number + Label layout */}
                <div
                  className={`flex flex-col items-center justify-center py-1 px-1.5 rounded transition-all ${
                    isActive
                      ? "bg-[color:var(--mustard)] border border-[color:var(--ink)] shadow-[2px_2px_0_var(--ink)]"
                      : "hover:bg-[color:var(--surface-warm)]"
                  }`}
                >
                  <span className="font-mono text-[0.68rem] font-extrabold tracking-tighter">
                    {num}
                  </span>
                  <span className="font-heading text-[0.6rem] uppercase tracking-wider hidden lg:block leading-none mt-0.5 font-bold">
                    {label}
                  </span>
                </div>

                {/* Hover Tooltip Card (Reveals Lucide Icon + Full Name) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-full ml-3 hidden md:flex items-center gap-2 rounded-md border-2 border-[color:var(--ink)] bg-[color:var(--surface)] px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wider text-[color:var(--ink)] shadow-[3px_3px_0_var(--ink)] opacity-0 transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100 z-50 whitespace-nowrap"
                >
                  <Icon size={14} strokeWidth={2.2} className="text-[color:var(--burnt)]" />
                  <span>
                    {num} {label}
                  </span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Rail Motif: Starburst & Year */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="size-2 rounded-full bg-[color:var(--teal)] border border-[color:var(--ink)]" />
          <span className="font-mono text-[0.62rem] font-bold text-[color:var(--ink-muted)]">
            ’26
          </span>
        </div>
      </aside>

      {/* ─── Mobile Bottom Tab Bar (Collapsible for <md) ─── */}
      <nav
        aria-label="Mobile quick tab bar"
        className="md:hidden fixed bottom-0 inset-x-0 h-14 z-40 border-t-2 border-[color:var(--ink)] bg-[color:var(--paper)]/95 backdrop-blur-sm flex items-center justify-around px-2 select-none"
      >
        {sections.map(({ id, num, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <a
              key={id}
              href={href(id)}
              onClick={() => go(id)}
              aria-label={label}
              className={`flex flex-col items-center justify-center p-1 relative transition-colors ${
                isActive
                  ? "text-[color:var(--burnt)] font-bold"
                  : "text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]"
              }`}
            >
              {isActive && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-[color:var(--burnt)] rounded-full" />
              )}
              <Icon size={16} strokeWidth={isActive ? 2.4 : 1.8} />
              <span className="font-mono text-[0.55rem] font-bold mt-0.5">
                {num}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
