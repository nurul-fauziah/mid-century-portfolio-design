import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/content/site";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { Starburst } from "@/components/shapes/Starburst";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  return {
    title: post ? `${post.title} — Mid-Century Journal` : "Post Not Found",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Nav />
      <article className="w-full bg-[color:var(--paper)] min-h-screen text-[color:var(--ink)] pt-24 sm:pt-32 pb-24 transition-colors font-body md:pl-20 lg:pl-24">
        <div className="mx-auto max-w-[800px] px-6 sm:px-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/#blog"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[color:var(--ink-muted)] hover:text-[color:var(--burnt)] transition-colors"
            >
              <ArrowLeft size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Journal / {post.category}</span>
            </Link>
          </div>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs tracking-wider uppercase mb-4">
            <span className="px-2.5 py-1 rounded bg-[color:var(--mustard)] text-[#2B2118] border border-[color:var(--ink)] font-bold shadow-[2px_2px_0_var(--ink)]">
              {post.category}
            </span>
            <span className="text-[color:var(--ink-muted)]">·</span>
            <span className="text-[color:var(--ink-muted)]">{post.date}</span>
            <span className="text-[color:var(--ink-muted)]">·</span>
            <span className="text-[color:var(--teal)] font-bold">{post.minutes} MIN READ</span>
          </div>

          {/* Article Title in Bold Poster Sans */}
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-[color:var(--ink)] tracking-tight leading-[1.08] mb-8 uppercase">
            {post.title}
          </h1>

          <div className="h-0.5 w-full bg-[color:var(--ink)] mb-10" />

          {/* Article Content */}
          <div className="space-y-6 text-base sm:text-lg leading-[1.8] text-[color:var(--ink)]">
            {post.body.map((block, index) => {
              switch (block.t) {
                case "h":
                  return (
                    <h2
                      key={index}
                      className="font-heading text-2xl sm:text-3xl font-black text-[color:var(--ink)] tracking-tight mt-12 mb-4 uppercase"
                    >
                      {block.v as string}
                    </h2>
                  );
                case "li":
                  return (
                    <ul key={index} className="list-none pl-0 space-y-3 my-5">
                      {(block.v as string[]).map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[color:var(--ink-muted)]">
                          <span className="size-2 rounded-full bg-[color:var(--burnt)] shrink-0 mt-2.5 border border-[color:var(--ink)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case "code":
                  return (
                    <pre
                      key={index}
                      className="rounded-xl border-2 border-[color:var(--ink)] bg-[color:var(--surface)] p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm text-[color:var(--ink)] font-mono my-6 shadow-[3px_3px_0_var(--ink)]"
                    >
                      <code>{block.v as string}</code>
                    </pre>
                  );
                case "p":
                default:
                  return (
                    <p key={index} className="text-[color:var(--ink)] leading-relaxed">
                      {block.v as string}
                    </p>
                  );
              }
            })}
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t-2 border-[color:var(--ink)] flex items-center justify-between">
            <Link
              href="/#blog"
              className="retro-btn-outline"
            >
              <ArrowLeft size={15} strokeWidth={2.5} />
              <span>Back to Journal</span>
            </Link>

            <div className="flex items-center gap-2">
              <Starburst size={20} variant="sparkle" fillColor="var(--burnt)" strokeColor="var(--ink)" />
              <span className="font-mono text-xs font-bold text-[color:var(--ink-muted)]">
                EST. 2026
              </span>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
