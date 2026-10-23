import type { Metadata, Viewport } from "next";
import "./globals.css";

import Intro from "@/components/Intro";
import MotionRoot from "@/components/MotionRoot";
import { site } from "@/content/site";
import { fontHeading, fontBody, fontMono } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.title}`,
  description: site.intro,
  applicationName: site.name,
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Mid-Century Modern",
    "Portfolio",
    "Tangerang",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.intro,
    type: "website",
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.intro,
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
    { media: "(prefers-color-scheme: light)", color: "#F6EFE0" },
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
