import type {SimpleIcon} from "simple-icons";
import {siJavascript,siTypescript,siNextdotjs,siReact,siTailwindcss,siShadcnui,siPhp,siLaravel,siFilament,siNestjs,siPython,siMysql,siPostgresql,siPrisma,siFlutter,siKotlin,siGit,siPnpm,siJira,siSanity,siMinio} from "simple-icons";
// Skill name (as written in content/site.ts) -> brand logo. To add a logo: import its `siXxx` above and add a line here.
const icons:Record<string,SimpleIcon>={
 "JavaScript":siJavascript,"TypeScript":siTypescript,"Next.js":siNextdotjs,"React":siReact,"Tailwind CSS":siTailwindcss,"shadcn/ui":siShadcnui,
 "PHP":siPhp,"Laravel":siLaravel,"Filament":siFilament,"NestJS":siNestjs,"Python":siPython,
 "MySQL":siMysql,"PostgreSQL":siPostgresql,"Prisma":siPrisma,
 "Flutter":siFlutter,"Kotlin":siKotlin,
 "Git":siGit,"pnpm":siPnpm,"Jira":siJira,"Sanity CMS":siSanity,"MinIO":siMinio};
const lum=(hex:string)=>{const c=[0,2,4].map(i=>{const v=parseInt(hex.slice(i,i+2),16)/255;return v<=.03928?v/12.92:((v+.055)/1.055)**2.4});return .2126*c[0]+.7152*c[1]+.0722*c[2]};
// Brand colour, except near-black brands (Next.js, Prisma, ...) which would vanish on the charcoal background.
export function techIcon(name:string){const i=icons[name];if(!i)return null;return {path:i.path,title:i.title,color:lum(i.hex)<.12?"var(--color-fg)":`#${i.hex}`}}
