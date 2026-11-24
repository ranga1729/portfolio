import { EducationItem, ExperienceItem } from "@/types/general";
import { Award, Book, BookCheck, BookOpen, Briefcase, Certificate, Code2, EthernetPort, GraduationCap, Music, Network } from "lucide-react";

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

export const WORK_EXPERIENCES: ExperienceItem[] = [
  {
    company: "FACTn Software",
    role: "Intern Software Developer",
    projects: [
      {
        title: "ChatN - Multi-Tenant AI API Gateway Platform",
        description: "Unified AI API gateway enabling backend-less chatbots with real-time voice, streaming, and provider-agnostic integrations.",
        techStack: [
          "ASP.NET Core 10",
          "C#",
          "PostgreSQL",
          "Redis",
          "Azure Key Vault",
          "Azure AI Search",
          "Azure Blob Storage",
          "WebSockets",
          "SSE",
        ],
        highlights: [
          {
            lead: "Architected a multi-tenant AI API Gateway",
            detail: "unifying OpenAI and Google Gemini APIs (text, audio, streaming) behind a standardized WebSocket/SSE protocol using Factory and Adapter design patterns.",
          },
          {
            lead: "Engineered resilient AI session management",
            detail: "incorporating Redis-backed state tracking, ephemeral token auth, inactivity timeouts, and automatic provider failover/reconnection logic.",
          },
          {
            lead: "Implemented an enterprise RAG pipeline",
            detail: "using Azure AI Search and Azure Blob Storage featuring vector search, document ingestion, response grounding, and strict project-level tenant isolation.",
          },
          {
            lead: "Designed Model Context Protocol (MCP) tool integration,",
            detail: "building automated tool discovery, namespace collision prevention, and runtime execution proxies.",
          },
          {
            lead: "Built platform governance features",
            detail: "including prompt versioning, API key lifecycle management, Redis rate limiting, usage/cost tracking, and immutable audit logging.",
          },
          {
            lead: "Enforced zero-trust security & privacy",
            detail: "via Azure Key Vault secret management, HMAC key hashing, TLS enforcement, and privacy-first ephemeral session storage without long-term message retention.",
          },
        ],
      },
      {
        title: "MyDrive - Multivendor Automotive Services Platform",
        description: "Platform connecting service providers with vehicle owners, enhanced with real-time conversational AI features.",
        techStack: [
          "Flutter", 
          "ReactJS", 
          "Python", 
          "Google Gemini Live API"
        ],
        highlights: [
          {
            lead: "Developed proof-of-concept (POC) conversational AI chatbots",
            detail: "integrating Google Gemini Live API into the Flutter mobile application for real-time voice interaction.",
          },
          {
            lead: "Engineered dynamic system prompts",
            detail: "to accurately infer user intents, handle contextual follow-up questions, and streamline automotive service bookings.",
          },
          {
            lead: "Evaluated technical feasibility",
            detail: "of real-time voice and chat AI capabilities within mobile user workflows, presenting functional demonstration scenarios to product teams.",
          },
        ],
      },
    ],
  },
  {
    company: "Calcey Technologies",
    role: "Intern Software Developer",
    projects: [
      {
        title: "Fresh Fitness Food (FFF)",
        description: "UK-based personalized nutrition and meal delivery platform offering custom meal plans, dynamic order scheduling, and customer management.",
        techStack: [
          "React.js", 
          "ASP.NET Core", 
          "PostgreSQL", 
          "RESTful APIs"
        ],
        highlights: [
          {
            lead: "Engineered full-stack features",
            detail: "across ASP.NET Core REST APIs and React.js frontends within a cross-functional agile team serving a UK-wide customer base.",
          },
          {
            lead: "Refactored meal order forms",
            detail: "utilizing reusable React design patterns and optimized client-side state management, significantly improving checkout UX and form completion speeds.",
          },
          {
            lead: "Optimized admin & user dashboards,",
            detail: "upgrading database queries in PostgreSQL and streamlining API endpoints to reduce rendering latency and elevating platform performance.",
          },
          {
            lead: "Overhauled meal rating & reporting features,",
            detail: "rebuilding report generation logic to enable accurate, real-time feedback processing for culinary and ops teams.",
          },
          {
            lead: "Developed customer portal enhancements,",
            detail: "including an interactive order history module that delivers detailed order logs and transaction tracking to end users.",
          },
          {
            lead: "Maintained system reliability,",
            detail: "actively debugging complex front-end and back-end defects across administrative workflows to ensure platform stability.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    period: "2025 Dec — Present",
    title: "Cisco CCNA",
    institution: "University of Moratuwa",
    icon: EthernetPort,
    status: "In-Progress",
    highlights: [
      { label: "Focus", value: "Networking & Infrastructure" },
      { label: "Status", value: "In-Progress" },
    ],
  },
  {
    period: "2023 Oct — 2026 Nov",
    title: "Bachelor of Information Technology",
    institution: "University of Colombo School of Computing",
    icon: GraduationCap,
    highlights: [
      { label: "GPA", value: "3.81" },
      { label: "Field", value: "Information Technology" },
    ],
  },
  {
    period: "2023 Feb — 2024 May",
    title: "Calcey Springboard Apprenticeship Program",
    institution: "Calcey Technologies",
    icon: Certificate,
    highlights: [
      { label: "Track", value: "Industry Software Engineering Apprenticeship" },
    ],
  },
  {
    period: "2019 Jan — 2023 Jan",
    title: "G.C.E. Advanced Level",
    institution: "Royal College, Colombo 7",
    icon: BookCheck,
    highlights: [
      { label: "Stream", value: "Physical Science" },
      { label: "Results", value: "B, C, C" },
    ],
  },
  {
    period: "2018 Dec",
    title: "G.C.E. Ordinary Level",
    institution: "Homagama Maha Vidyalaya",
    icon: Book,
    highlights: [
      { label: "Results", value: "9As" },
    ],
  },
];
