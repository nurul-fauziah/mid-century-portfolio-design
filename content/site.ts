export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  accent: string;
  summary: string;
  overview: string;
  problem: string;
  objectives: string[];
  contributions: string[];
  frontend: string;
  backend: string;
  stack: string[];
  features: string[];
  challenges: { c: string; s: string }[];
  live?: string;
  repo?: string;
  sample?: boolean;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  minutes: number;
  sample?: boolean;
  body: Array<{
    t: "h" | "p" | "code" | "li";
    v: string | string[];
  }>;
};

export const site = {
  name: "Zia",
  initials: "Z",
  tagline: "Product-minded developer",
  title: "Full-Stack Developer",
  location: "Tangerang, Indonesia",
  intro:
    "I design and build thoughtful digital products that balance clean UX, reliable systems, and product-minded execution.",
  available: {
    on: true,
    label: "Open for opportunities and collaborations",
  },
  resume: "/resume.pdf",
  email: "nurulfauziahh204@gmail.com",
  social: {
    github: "https://github.com/nurul-fauziah",
    linkedin: "https://www.linkedin.com/in/nurul-fauziah/",
  },
  url: "http://localhost:3000",
};

export const about = {
  years: "1+ years",
  lead: "I build digital experiences that feel premium, practical, and thoughtfully engineered.",
  body: [
    "I am a Fullstack Developer Intern at Trisya Media Teknologi (TMT) in Tangerang, where I work across platform architecture, frontend polish, and business-driven web solutions.",
    "My work sits at the intersection of product thinking and engineering discipline: I like making systems easier to maintain, interfaces easier to trust, and workflows easier to use in real life.",
    "From Laravel foundations to modern Next.js and NestJS workflows, I care about creating products that are not only functional, but also clear, scalable, and quietly refined in the details.",
  ],
  interests: [
    "Internal systems & ERP",
    "Interface design",
    "Japanese language & continuous learning",
  ],
  education: "Focused on software engineering, product thinking, and practical problem solving in modern web applications.",
  timeline: [
    { y: "2024", t: "Junior Laravel Developer" },
    { y: "2025", t: "Fullstack Developer Intern, TMT" },
  ],
};

// Flat list preserved for backward compat (used in About section chips)
export const skills: string[] = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "shadcn/ui",
  "PHP",
  "Laravel",
  "Filament",
  "NestJS",
  "Python",
  "MySQL",
  "PostgreSQL",
  "Prisma",
  "Flutter",
  "Kotlin",
  "Git",
  "pnpm",
  "Jira",
  "Sanity CMS",
  "MinIO",
];

// Categorized skills for the sketch-board layout
export const skillCategories: { label: string; annotation: string; items: string[] }[] = [
  {
    label: "Languages",
    annotation: "core toolkit",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Kotlin"],
  },
  {
    label: "Frameworks",
    annotation: "build with these →",
    items: ["Next.js", "React", "Laravel", "NestJS", "Flutter", "Filament"],
  },
  {
    label: "Styling & UI",
    annotation: "interface layer",
    items: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Databases",
    annotation: "data stores",
    items: ["MySQL", "PostgreSQL", "Prisma"],
  },
  {
    label: "Tools & Infra",
    annotation: "dev workflow",
    items: ["Git", "pnpm", "Jira", "Sanity CMS", "MinIO"],
  },
];

export const experience = [
  {
    role: "Fullstack Developer Intern",
    org: "Trisya Media Teknologi (TMT)",
    dates: "2025 – Present",
    resp: [
      "Building Universal Portal Engine (UPE), a monorepo-based internal platform for operational workflows and unified access across business tools.",
      "Developing the Lokananta Bloc company profile site with a polished user experience and a content model that stays flexible for future updates.",
      "Refactoring a Laravel/Filament finance dashboard to improve maintainability, clarity, and frontend consistency across business-critical interfaces.",
    ],
    tech: ["Next.js", "NestJS", "Laravel", "Filament", "Prisma"],
    note: "I focus on translating product goals into structured, scalable interfaces and clean implementation practices that remain easy to evolve.",
  },
  {
    role: "Junior Laravel Developer",
    org: "TMT / Laravel Projects",
    dates: "2024 – 2025",
    resp: [
      "Built and refined CRUD-heavy web applications using Laravel and MySQL for evolving business requirements.",
      "Worked closely with backend logic, validation flow, and interface consistency to support smoother product operations.",
      "Developed a stronger understanding of production-minded work: balancing code quality, business needs, and maintainable system design.",
    ],
    tech: ["PHP", "Laravel", "MySQL"],
    note: "This period shaped my backend foundation and deepened my appreciation for thoughtful, user-centered systems design.",
  },
];

export const projects: Project[] = [
  {
    slug: "universal-portal-engine",
    name: "Universal Portal Engine",
    category: "Internal platform",
    role: "Fullstack (intern)",
    accent: "#3b9cff",
    summary: "A pnpm monorepo powering TMT's internal portal platform and operational workflows.",
    overview:
      "Universal Portal Engine is an internal platform designed to unify operational interfaces, navigation, and app structure across a growing monorepo environment.",
    problem:
      "The team needed a scalable internal foundation that could support multiple routes, shared UI patterns, and a predictable developer experience without repetitive setup.",
    objectives: [
      "Create a reusable application shell for internal pages and modules",
      "Standardize layout patterns across routes and feature areas",
      "Support faster iteration for platform teams working in a monorepo",
    ],
    contributions: [
      "Built the AppShell, Sidebar, and Topbar layout for the internal portal",
      "Created placeholder screens for 11 routes to help the product move faster",
      "Wrote an idempotent Prisma seed script to streamline local setup",
      "Set up reusable shadcn/ui components for consistency across the platform",
    ],
    frontend: "Next.js 15, React 19, shadcn/ui, and a modular design system.",
    backend: "NestJS with PostgreSQL via Prisma and MinIO for object storage.",
    stack: ["Next.js", "React", "NestJS", "PostgreSQL", "Prisma", "MinIO", "pnpm"],
    features: [
      "Reusable shell layout and navigation system",
      "Monorepo-ready developer structure",
      "Prisma-powered local data setup",
      "Consistent component library and internal app design",
    ],
    challenges: [
      {
        c: "Prisma client issues and TypeScript version mismatches",
        s: "Resolved through monorepo-aware dependency management and consistent environment setup.",
      },
      {
        c: "Choosing the right storage approach",
        s: "Evaluated options and recommended MinIO for its S3-compatible API and local-first practicality.",
      },
    ],
    sample: true,
  },
  {
    slug: "lokananta-bloc",
    name: "Lokananta Bloc Profile",
    category: "Company profile",
    role: "Frontend",
    accent: "#2ec4b6",
    summary: "A profile website for a cultural destination brand in Solo, Indonesia, with a refined visual identity.",
    overview:
      "This project focused on turning a brand story into a modern, approachable website that matched the design direction while keeping content flexible enough for future updates.",
    problem:
      "The client needed a web experience that felt premium and consistent with the brand, without sacrificing ease of content management.",
    objectives: [
      "Match the Figma design closely with a polished visual feel",
      "Structure editorial content for easy maintenance through Sanity CMS",
      "Deliver a responsive experience across desktop and mobile screens",
    ],
    contributions: [
      "Implemented GROQ queries and Sanity content field spreads for structured content delivery",
      "Matched the visual design closely to maintain a premium look and feel",
      "Applied two-tone highlight styling to elevate the brand presentation",
    ],
    frontend: "Next.js with static rendering and a design-driven UI layer.",
    backend: "Sanity CMS for structured content and flexible editorial updates.",
    stack: ["Next.js", "Sanity", "GROQ"],
    features: [
      "CMS-driven content organization",
      "Responsive brand-first presentation",
      "Custom design details aligned to provided mockups",
    ],
    challenges: [
      {
        c: "Design fidelity and content consistency",
        s: "I translated the provided UI into a precise and maintainable implementation without losing flexibility.",
      },
      {
        c: "Balancing aesthetics with content structure",
        s: "Used a clean content model so future edits remain simple for non-technical users.",
      },
    ],
    sample: true,
  },
  {
    slug: "finance-dashboard",
    name: "Finance Dashboard",
    category: "Dashboard",
    role: "Frontend",
    accent: "#7c8cff",
    summary: "A dashboard for a finance workflow built with Laravel and Filament, focused on usability and role-based visibility.",
    overview:
      "This project involved improving and restructuring a dashboard that needed to support financial operations in a clear, maintainable way.",
    problem:
      "The existing system needed a more organized architecture and improved product logic so that widgets, access rules, and performance could scale without confusion.",
    objectives: [
      "Refactor the dashboard architecture around a clearer service model",
      "Improve access control and widget visibility by role",
      "Make the dashboard easier to maintain and extend over time",
    ],
    contributions: [
      "Refactored the dashboard around a FinanceDashboardService pattern for better structure",
      "Improved caching behavior to reduce unnecessary loads and improve responsiveness",
      "Applied role-based visibility that matched business requirements more closely",
    ],
    frontend: "Filament widgets and a cleaner dashboard interface.",
    backend: "Laravel-driven business logic and data access.",
    stack: ["Laravel", "Filament", "PHP", "MySQL"],
    features: [
      "Service-oriented dashboard structure",
      "Role-aware widget visibility",
      "Improved performance through caching",
    ],
    challenges: [
      {
        c: "Balancing business rules with UI simplicity",
        s: "I focused on making the dashboard clearer for users while keeping the data model and business logic maintainable.",
      },
      {
        c: "Keeping the platform extensible",
        s: "The refactor was designed to support future widgets and role scopes without a major rewrite.",
      },
    ],
    sample: true,
  },
];

export const posts: Post[] = [
  {
    slug: "building-product-thinking-in-real-projects",
    title: "Building product thinking in real projects",
    excerpt:
      "A short reflection on how engineering decisions become clearer when product context, user needs, and code quality are treated as one system.",
    date: "2026-01-10",
    category: "Web Development",
    minutes: 4,
    sample: true,
    body: [
      { t: "h", v: "From code to product" },
      { t: "p", v: "The most useful projects are not only the ones that work technically—they are the ones that solve the right problem in a way users can actually understand and trust." },
      { t: "p", v: "In internal work and client-facing systems, I have found that good engineering is shaped by product clarity, maintainability, and a strong sense of user flow." },
      { t: "li", v: ["Understand the problem before writing code", "Build for future change, not only for the current request", "Design interfaces that help users move with confidence"] },
      { t: "code", v: "const productFocus = 'clear UX + reliable systems';" },
    ],
  },
];
