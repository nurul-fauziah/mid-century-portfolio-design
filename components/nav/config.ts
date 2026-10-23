import {
  House,
  User,
  FolderCode,
  Layers,
  BriefcaseBusiness,
  NotebookPen,
  Mail,
} from "lucide-react";

// Single source of truth for all 7 mid-century numbered sections
export const sections = [
  { id: "home", num: "01", label: "Home", icon: House },
  { id: "about", num: "02", label: "About", icon: User },
  { id: "projects", num: "03", label: "Projects", icon: FolderCode },
  { id: "skills", num: "04", label: "Skills", icon: Layers },
  { id: "experience", num: "05", label: "Experience", icon: BriefcaseBusiness },
  { id: "blog", num: "06", label: "Blog", icon: NotebookPen },
  { id: "contact", num: "07", label: "Contact", icon: Mail },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const sectionIds: SectionId[] = sections.map((s) => s.id);

// Editorial top masthead links
export const mastheadLinks: { id: SectionId; label: string }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
];

export const labelOf = (id: SectionId) => {
  const section = sections.find((s) => s.id === id);
  return section?.label || "";
};
