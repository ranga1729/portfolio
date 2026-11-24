import { BookOpen, Code2, GraduationCap, Music } from "lucide-react";

export const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
];

export const ROLES = [
  {
    index: "01",
    title: "Developer",
    icon: Code2,
    tag: "ASP.NET Core • React • AI",
    description:
      "Architecting multi-tenant APIs, Clean Architecture backends, and real-time AI integrations (RAG, Gemini Live API, MCP) built for production reliability.",
  },
  {
    index: "02",
    title: "Teacher",
    icon: BookOpen,
    tag: "Workshops • Technical Writing",
    description:
      "Leading hands-on developer workshops—including Git & Version Control sessions at USJP—and publishing technical articles on Medium.",
  },
  {
    index: "03",
    title: "Student",
    icon: GraduationCap,
    tag: "UCSC • Cisco CCNA",
    description:
      "Reading for a Bachelor of Information Technology at UCSC (3.81 GPA) alongside Cisco CCNA networking coursework at the University of Moratuwa.",
  },
  {
    index: "04",
    title: "Guitarist",
    icon: Music,
    tag: "Fingerstyle • Rhythm",
    description:
      "Stepping away from system design and terminal windows to practice fingerstyle arrangements, chord voicings, and rhythm.",
  },
];