import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/content/site";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { ZLogo } from "@/components/ZLogo";
import { Starburst } from "@/components/shapes/Starburst";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface ProjectSectionProps {
  title: string;
  children: React.ReactNode;
}

export const generateStaticParams = () => {
  return projects.map((project) => ({
    slug: project.slug,
  }));
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: project ? `${project.name} — Nurul Fauziah` : "Project Not Found",
    description: project?.summary,
  };
}

const ProjectSection = ({ title, children }: ProjectSectionProps) => (
  <section className="py-8 sm:py-10 border-t-2 border-[color:var(--ink)]/20 grid md:grid-cols-4 gap-6 items-start">
    <h2 className="font-heading text-xl sm:text-2xl font-black uppercase text-[color:var(--ink)] tracking-tight">
      {title}
    </h2>
    <div className="md:col-span-3 text-[color:var(--ink-muted)] space-y-3.5 leading-[1.75] text-base font-body">
      {children}
    </div>
  </section>
);

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="w-full bg-[color:var(--paper)] min-h-screen text-[color:var(--ink)] pt-24 sm:pt-32 pb-24 transition-colors md:pl-20 lg:pl-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[color:var(--ink-muted)] hover:text-[color:var(--burnt)] transition-colors"
            >
              <ArrowLeft size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Projects / {project.name}</span>
            </Link>
          </div>

          {/* Meta Header */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase mb-4">
            <span className="px-2.5 py-1 rounded bg-[color:var(--mustard)] text-[#2B2118] border border-[color:var(--ink)] font-bold shadow-[2px_2px_0_var(--ink)]">
              {project.category}
            </span>
            <span className="text-[color:var(--ink-muted)]">·</span>
            <span className="font-bold text-[color:var(--teal)]">{project.role}</span>
          </div>

          {/* Title in Bold Mid-Century Grotesque Sans */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-[color:var(--ink)] tracking-tight leading-[1.02] mb-6 uppercase">
            {project.name}
          </h1>

          {/* Summary Card */}
          <div className="p-6 sm:p-8 rounded-2xl border-2.5 border-[color:var(--ink)] bg-[color:var(--surface)] shadow-[6px_6px_0_var(--ink)] mb-12">
            <p className="font-body text-base sm:text-lg text-[color:var(--ink)] leading-[1.75]">
              {project.summary}
            </p>
          </div>

          {/* Structured Detail Sections */}
          <ProjectSection title="Overview">
            <p>{project.overview}</p>
          </ProjectSection>

          <ProjectSection title="Problem">
            <p>{project.problem}</p>
          </ProjectSection>

          <ProjectSection title="Objectives">
            <ul className="list-none pl-0 space-y-2.5">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[color:var(--burnt)] shrink-0 mt-2.5 border border-[color:var(--ink)]" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Contributions">
            <ul className="list-none pl-0 space-y-2.5">
              {project.contributions.map((contribution) => (
                <li key={contribution} className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[color:var(--teal)] shrink-0 mt-2.5 border border-[color:var(--ink)]" />
                  <span>{contribution}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Architecture">
            <div className="space-y-4">
              <div className="p-4 rounded-xl border-2 border-[color:var(--ink)] bg-[color:var(--surface-warm)]/60">
                <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--ink)] font-bold mb-1">
                  Frontend
                </p>
                <p className="font-body text-sm text-[color:var(--ink-muted)]">{project.frontend}</p>
              </div>
              <div className="p-4 rounded-xl border-2 border-[color:var(--ink)] bg-[color:var(--surface-warm)]/60">
                <p className="font-mono text-xs uppercase tracking-wider text-[color:var(--ink)] font-bold mb-1">
                  Backend &amp; Infrastructure
                </p>
                <p className="font-body text-sm text-[color:var(--ink-muted)]">{project.backend}</p>
              </div>
            </div>
          </ProjectSection>

          <ProjectSection title="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="retro-tag">
                  {s}
                </span>
              ))}
            </div>
          </ProjectSection>

          <ProjectSection title="Key Features">
            <ul className="list-none pl-0 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[color:var(--mustard)] shrink-0 mt-2.5 border border-[color:var(--ink)]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Challenges & Solutions">
            <div className="space-y-4">
              {project.challenges.map((challengeItem) => (
                <div
                  key={challengeItem.c}
                  className="rounded-xl border-2 border-[color:var(--ink)] bg-[color:var(--surface)] p-5 shadow-[3.5px_3.5px_0_var(--ink)]"
                >
                  <p className="font-heading text-base font-extrabold text-[color:var(--ink)] mb-1 uppercase tracking-tight">
                    {challengeItem.c}
                  </p>
                  <p className="font-body text-sm text-[color:var(--ink-muted)]">
                    {challengeItem.s}
                  </p>
                </div>
              ))}
            </div>
          </ProjectSection>

          <ProjectSection title="Links">
            {project.live || project.repo ? (
              <div className="flex flex-wrap gap-3">
                {project.live && (
                  <a
                    className="retro-btn !bg-[color:var(--mustard)] !text-[#2B2118]"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Deployment</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </a>
                )}
                {project.repo && (
                  <a
                    className="retro-btn-outline"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Source Repository</span>
                    <ArrowUpRight size={15} strokeWidth={2.5} />
                  </a>
                )}
              </div>
            ) : (
              <p className="text-sm font-mono text-[color:var(--ink-muted)]">
                Internal enterprise platform — proprietary source code.
              </p>
            )}
          </ProjectSection>

          {/* Bottom Back Action */}
          <div className="mt-16 pt-8 border-t-2 border-[color:var(--ink)] flex items-center justify-between">
            <Link
              href="/#projects"
              className="retro-btn-outline"
            >
              <ArrowLeft size={15} strokeWidth={2.5} />
              <span>Return to Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <Starburst size={20} variant="sparkle" fillColor="var(--burnt)" strokeColor="var(--ink)" />
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                EST. 2026
              </span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
