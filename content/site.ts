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
  name: "Nurul Fauziah",
  initials: "Z",
  tagline: "Building web applications and internal systems",
  title: "Full Stack Developer",
  location: "Tangerang, Indonesia",
  intro:
    "I am a Full Stack Developer and Informatics Engineering graduate. I build web applications and internal tools with Next.js, Laravel, and NestJS, focusing on clear data models, practical workflows, and maintainable code.",
  available: {
    on: true,
    label: "Available for full-time roles & projects",
  },
  resume: "/resume.pdf",
  email: "nurulfauziahh204@gmail.com",
  social: {
    github: "https://github.com/nurul-fauziah",
    linkedin: "https://www.linkedin.com/in/nurul-fauziah/",
  },
  url: "https://mid-century-portfolio-design.vercel.app",
};

export const about = {
  years: "1+ years",
  lead: "I like understanding how a feature will actually be used before deciding how to build it.",
  body: [
    "I am a fresh graduate in Informatics Engineering and a Full Stack Developer Intern at Trisya Media Teknologi (TMT) in Tangerang. My work focuses on building and maintaining web applications, internal tools, and database-driven systems.",
    "I don't just think about whether a feature works on my local machine. I also care about how people use it in their daily workflow and whether the system is practical to maintain. When building internal tools, reducing three confusing steps to one clear flow saves real time across a team.",
    "My day-to-day stack centers around Next.js, TypeScript, Laravel, and NestJS, working with PostgreSQL and MySQL. I enjoy working on the structural parts of applications: role-based access control (RBAC), relational database schemas, form validations, and clean API contracts.",
  ],
  interests: [
    "Internal tools & ERP workflows",
    "Database design & API contracts",
    "Japanese language & continuous learning",
  ],
  education:
    "Bachelor's Degree in Informatics Engineering. Hands-on background in relational database design, object-oriented programming, and web systems development.",
  timeline: [
    { y: "2024", t: "Junior Laravel Developer" },
    { y: "2025", t: "Full Stack Developer Intern, TMT" },
  ],
};

// Flat list of technologies
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
  "Docker",
  "Jira",
  "Sanity CMS",
  "MinIO",
];

// Categorized skills
export const skillCategories: { label: string; annotation: string; items: string[] }[] = [
  {
    label: "Languages",
    annotation: "core syntax",
    items: ["JavaScript", "TypeScript", "PHP", "Python", "Kotlin"],
  },
  {
    label: "Frameworks & Backend",
    annotation: "application layer",
    items: ["Next.js", "React", "Laravel", "NestJS", "Filament", "Flutter"],
  },
  {
    label: "UI & Styling",
    annotation: "interface layer",
    items: ["Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Databases & Storage",
    annotation: "persistence",
    items: ["PostgreSQL", "MySQL", "Prisma", "MinIO"],
  },
  {
    label: "DevOps & Workflow",
    annotation: "tooling & delivery",
    items: ["Git", "Docker", "pnpm", "Jira", "Sanity CMS"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Trisya Media Teknologi (TMT)",
    dates: "2025 – Present",
    resp: [
      "Developing Universal Portal Engine (UPE), an internal platform providing role-based access control (RBAC), user and role management, document management, and shared configuration dashboards.",
      "Building the Lokananta Bloc profile website with Next.js and Sanity CMS, creating structured content schemas so non-technical staff can update schedules and events independently.",
      "Refactoring a Laravel/Filament finance dashboard into dedicated service classes, improving role-based widget access and query caching.",
    ],
    tech: ["Next.js", "NestJS", "Laravel", "Filament", "PostgreSQL", "Prisma", "Docker"],
    note: "Working on internal tools taught me that clean database models and predictable component boundaries matter far more than clever, over-engineered code.",
  },
  {
    role: "Junior Laravel Developer",
    org: "TMT / Laravel Projects",
    dates: "2024 – 2025",
    resp: [
      "Built database migrations, Eloquent models, and form request validations for CRUD-heavy business web applications.",
      "Developed an invoice and operational workflow management system using Laravel and MySQL, replacing manual spreadsheet tracking.",
      "Handled API endpoints, relational data queries, and role-based permissions across multiple administrative interfaces.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Blade", "REST APIs"],
    note: "Building backends from scratch showed me how quickly unvalidated inputs or sloppy schemas turn into bugs. It made me much more disciplined about database design and request handling.",
  },
];

export const projects: Project[] = [
  {
    slug: "universal-portal-engine",
    name: "Universal Portal Engine",
    category: "Internal Platform",
    role: "Full Stack (Intern)",
    accent: "#3b9cff",
    summary:
      "An internal platform providing role-based access control (RBAC), user and role management, document management, and shared dashboard configuration.",
    overview:
      "Universal Portal Engine is an internal platform built to give internal teams a single, structured workspace. Instead of rebuilding navigation, auth guards, and layout logic for each internal tool, this system provides a standardized application shell.",
    problem:
      "Internal teams were working on separate tools with inconsistent layout code, duplicated authentication checks, and fragmented user administration. Developers had to re-implement boilerplate for every new route, slowing down delivery.",
    objectives: [
      "Build a reusable application shell with navigation, top bar, and role-based access control (RBAC)",
      "Implement user management, role assignment, and document management modules",
      "Set up idempotent Prisma seed scripts to make local development onboarding fast and repeatable",
    ],
    contributions: [
      "Built the responsive application shell layout, sidebar navigation, and user header in Next.js",
      "Created structured screens for 11 internal routes, covering user administration, role assignment, and document tracking",
      "Wrote idempotent Prisma database seed scripts for local development and testing environments",
      "Implemented reusable UI components with shadcn/ui and Tailwind CSS to maintain consistency across modules",
    ],
    frontend: "Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui.",
    backend: "NestJS with PostgreSQL via Prisma ORM, Docker, MinIO for file storage.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Docker", "MinIO"],
    features: [
      "Role-based access control (RBAC) with granular permissions",
      "User and role management interfaces",
      "Document upload and management workflows",
      "Idempotent database seeding for repeatable local setups",
      "Modular shell layout shared across internal modules",
    ],
    challenges: [
      {
        c: "Ensuring smooth local setup across team members",
        s: "Wrote idempotent Prisma seed scripts and Docker configuration so teammates could spin up the full database, auth seed, and file storage in minutes without manual SQL steps.",
      },
      {
        c: "Organizing permissions for multiple internal roles",
        s: "Structured permission checks into middleware and backend guards so role boundaries are enforced at the API level rather than relying solely on UI hiding.",
      },
    ],
    sample: true,
  },
  {
    slug: "lokananta-bloc",
    name: "Lokananta Bloc Profile",
    category: "Company Profile",
    role: "Frontend Developer",
    accent: "#2ec4b6",
    summary:
      "A profile website for a historic music and cultural destination in Solo, Indonesia, featuring structured content management through Sanity CMS.",
    overview:
      "Lokananta Bloc is a cultural landmark and creative hub in Solo. This website serves as their public profile, showcasing visiting information, historical archives, tenant directories, and upcoming events.",
    problem:
      "The client needed a website where non-technical editorial staff could independently publish event schedules, tenant directories, and stories without requesting code updates from developers.",
    objectives: [
      "Match the provided Figma design closely with clean, responsive pages",
      "Structure editorial content schemas in Sanity CMS for flexible updates",
      "Deliver fast page loads using Next.js static rendering",
    ],
    contributions: [
      "Created Sanity Studio schema types for events, destination highlights, and tenant listings",
      "Wrote GROQ queries to fetch structured content into Next.js pages",
      "Implemented responsive page layouts from mobile to desktop following provided design mockups",
      "Built accessible content sections with clean semantic markup",
    ],
    frontend: "Next.js, TypeScript, Tailwind CSS.",
    backend: "Sanity CMS for structured content management, queried via GROQ.",
    stack: ["Next.js", "TypeScript", "Sanity CMS", "GROQ", "Tailwind CSS"],
    features: [
      "CMS-backed content management for events, stories, and directories",
      "GROQ queries optimized for structured content retrieval",
      "Responsive layout for mobile, tablet, and desktop viewports",
      "Clean content model allowing non-technical updates without code changes",
    ],
    challenges: [
      {
        c: "Designing a schema that non-technical editors could manage easily",
        s: "Structured content fields with clear helper labels, validation rules, and sensible defaults in Sanity Studio, preventing broken layouts when optional fields are empty.",
      },
      {
        c: "Translating detailed Figma mockups accurately into code",
        s: "Built reusable layout components with Tailwind CSS that preserved spacing and typographic rhythm across different screen resolutions.",
      },
    ],
    sample: true,
  },
  {
    slug: "finance-dashboard",
    name: "Finance Dashboard Refactor",
    category: "Internal Tool / Dashboard",
    role: "Full Stack Developer",
    accent: "#7c8cff",
    summary:
      "A dashboard refactor for an operational finance workflow built with Laravel and Filament, improving role-based widget visibility and query structure.",
    overview:
      "This project focused on restructuring a financial operational dashboard built on Laravel and Filament. The system handles daily transaction summaries, approval queues, and financial records.",
    problem:
      "The original dashboard had heavy database queries embedded directly inside presentation widgets, causing slow page loads. Access control rules were also inconsistent across different staff roles.",
    objectives: [
      "Separate business logic and data aggregation into a dedicated service layer",
      "Enforce role-based visibility so staff only see widgets relevant to their permissions",
      "Implement query caching to reduce redundant database queries on repeated views",
    ],
    contributions: [
      "Extracted complex query logic into a dedicated FinanceDashboardService class",
      "Configured Filament widget visibility rules scoped strictly by user role",
      "Added targeted caching for summary statistics to eliminate redundant query executions",
      "Cleaned up table schemas and filter controls for daily financial records",
    ],
    frontend: "Filament Admin panels, Blade components, Tailwind CSS.",
    backend: "Laravel, PHP, MySQL.",
    stack: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS"],
    features: [
      "Service-oriented dashboard logic separated from presentation widgets",
      "Role-aware widget visibility for accountants, managers, and administrators",
      "Summary statistic caching to speed up dashboard reloads",
      "Filterable transaction tables with date range and status filters",
    ],
    challenges: [
      {
        c: "Refactoring without breaking existing operational views",
        s: "Tested each service method independently and matched output formats before replacing the legacy widget queries, ensuring zero disruption to existing reporting.",
      },
      {
        c: "Preventing stale data when transactions are added",
        s: "Implemented cache tag invalidation whenever new transaction records are created or approved, ensuring the summary cards remain accurate.",
      },
    ],
    sample: true,
  },
];

export const posts: Post[] = [
  {
    slug: "building-product-thinking-in-real-projects",
    title: "Thinking beyond \"does it work?\" in internal tools",
    excerpt:
      "Reflections from building internal platforms: why database schemas matter more than fancy UI, and why understanding how people actually work prevents costly rewrites.",
    date: "2026-01-10",
    category: "Web Development",
    minutes: 4,
    sample: true,
    body: [
      { t: "h", v: "Understanding the workflow before writing the code" },
      {
        t: "p",
        v: "When building internal tools—like an RBAC portal or a finance dashboard—it is tempting to jump straight into creating UI components. But the real friction in daily operations rarely comes from missing visual flair. It comes from misaligned workflows: a form asking for information the operator doesn't have yet, or a database schema that cannot handle a normal business exception.",
      },
      { t: "h", v: "Keep the database model honest" },
      {
        t: "p",
        v: "I've learned that a clean relational schema and clear API contracts save more time than any frontend shortcut. When relationships between users, roles, and records are modeled cleanly in PostgreSQL or MySQL, the frontend code becomes simpler, validation is straightforward, and the system is much less prone to edge-case bugs.",
      },
      {
        t: "li",
        v: [
          "Talk through the actual operator workflow before writing migrations",
          "Validate data strictly at the boundary (forms and API endpoints)",
          "Build components that are clear to read and maintain six months from now",
        ],
      },
      {
        t: "code",
        v: "// Good software solves the actual workflow, not an imagined one\nconst isReady = requirements.understood && dataModel.sound;",
      },
    ],
  },
];
