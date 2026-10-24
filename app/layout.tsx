import type { Metadata, Viewport } from "next";
import "./globals.css";

import Intro from "@/components/Intro";
import MotionRoot from "@/components/MotionRoot";
import { site } from "@/content/site";
import { fontHeading, fontBody, fontMono } from "./fonts";

const siteUrl = "https://mid-century-portfolio-design.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.title}`,
    template: `%s · ${site.name}`,
  },
  description: site.intro,
  applicationName: site.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Full Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "NestJS Developer",
    "Web Developer Indonesia",
    "Informatics Engineering",
    "Tangerang",
  ],
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.intro,
    type: "website",
    url: "/",
    siteName: `${site.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.title}`,
    description: site.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1F1812" },
  ],
};

const themeScript = `
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get("theme");
    const savedTheme = themeParam || localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      document.documentElement.dataset.theme = savedTheme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = prefersDark ? "dark" : "light";
    }
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
`;

// JSON-LD Person structured data for technical discoverability & search engines
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  url: siteUrl,
  sameAs: [site.social.github, site.social.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tangerang",
    addressCountry: "ID",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "PHP",
    "Laravel",
    "Filament",
    "NestJS",
    "MySQL",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "REST APIs",
    "Role-Based Access Control (RBAC)",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Informatics Engineering",
  },
  description: site.intro,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        <MotionRoot>
          <Intro />
          {children}
        </MotionRoot>
      </body>
    </html>
  );
}
