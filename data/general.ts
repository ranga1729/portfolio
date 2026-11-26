import { ArticleItem, EducationItem, ExperienceItem, ProjectItem, RoleItem } from "@/types/general";
import { Book, BookCheck, BookOpen, Certificate, Code2, EthernetPort, GraduationCap, Music } from "lucide-react";

export const NAV_ITEMS = [
  { label: "Projects", href: "/#projects" },
  { label: "Articles", href: "/#articles" },
  { label: "Class-Schedule", href: "/class" },
  { label: "Contact", href: "/#contact" },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Motion",
  "Node.js",
];

export const ROLES: RoleItem[] = [
  {
    title: "Developer",
    image: "/images/roles/developer.webp",
    tag: "ASP.NET Core • React/Next • AI",
  },
  {
    title: "Teacher",
    image: "/images/roles/teacher.webp",
    tag: "ICT • Technical Writing",
  },
  {
    title: "Student",
    image: "/images/roles/student.webp",
    tag: "Masters • Cisco CCNA",
  },
  {
    title: "Guitarist",
    image: "/images/roles/guitarist.webp",
    tag: "Just For Fun",
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

export const PROJECTS: ProjectItem[] = [
  {
    title: "Koa - Clothing",
    description:
      "An e-commerce store built for a garment brand to launch its new clothing line, featuring clean CQRS architecture, cloud media storage, and transactional notifications.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "ASP.NET Core Web API",
      "MediatR",
      "CQRS",
      "Clean Architecture",
      "Entity Framework Core",
      "PostgreSQL",
      "Supabase",
      "Clerk Auth",
      "Azure Communication Service",
    ],
    githubUrl: "https://github.com/ranga1729/wichithra-clothing.git",
  },
  {
    title: "FaceTrack",
    description:
      "Flask-based facial recognition attendance system using Python and OpenCV to identify registered users and automate attendance marking.",
    techStack: [
      "Python",
      "Flask",
      "OpenCV",
      "face-recognition",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    githubUrl: "https://github.com/ranga1729/facetrack.git",
  },
  {
    title: "Wine Analytics: Dashboard (NLP)",
    description:
      "Python-based wine analytics platform combining statistical analysis, NLP, sentiment analysis, and interactive Plotly Dash visualizations to explore global wine ratings, pricing, regional patterns, and consumer reviews.",
    techStack: [
      "Python",
      "Jupyter Notebook",
      "NumPy",
      "Pandas",
      "NLTK",
      "Hugging Face Transformers",
      "Matplotlib",
      "Plotly",
      "Dash",
    ],
    githubUrl: "https://github.com/Lithasa/WineAnalytics.git",
  },
];

export type OrbitRingTier = "inner" | "middle" | "outer";

export interface TechStackItem {
  name: string;
  category: string;
  iconUrl: string;
  ring: OrbitRingTier;
}

export const TECH_STACKS: TechStackItem[] = [
  // Inner Ring — Core Languages & Primary Frameworks
  {
    name: "C#",
    category: "Language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    ring: "inner",
  },
  {
    name: "TypeScript",
    category: "Language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    ring: "inner",
  },
  {
    name: "Python",
    category: "Language",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    ring: "inner",
  },
  {
    name: "ASP.NET Core",
    category: "Backend",
    iconUrl: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/asp-net-core.svg",
    ring: "inner",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    ring: "inner",
  },
  {
    name: "React",
    category: "Frontend",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    ring: "inner",
  },

  // Middle Ring — Databases, Cloud & Infrastructure
  {
    name: "PostgreSQL",
    category: "Database",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    ring: "middle",
  },
  {
    name: "Redis",
    category: "Caching",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    ring: "middle",
  },
  {
    name: "Microsoft Azure",
    category: "Cloud",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    ring: "middle",
  },
  {
    name: "Supabase",
    category: "Backend & Storage",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    ring: "middle",
  },
  {
    name: "Neon",
    category: "Backend & Storage",
    iconUrl: "https://cdn.simpleicons.org/neon",
    ring: "middle",
  },
  {
    name: "Docker",
    category: "DevOps",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    ring: "middle",
  },
  {
    name: "Git",
    category: "Version Control",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    ring: "middle",
  },
  {
    name: "SQLite",
    category: "Database",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    ring: "middle",
  },

  // Outer Ring — AI, Mobile, Styling & Data Ecosystem
  {
    name: "Google Gemini",
    category: "AI & Live API",
    iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/google-gemini.svg",
    ring: "outer",
  },
  {
    name: "OpenAI",
    category: "AI Integration",
    iconUrl: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/openai-light.svg",
    ring: "outer",
  },
  {
    name: "Flutter",
    category: "Mobile",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    ring: "outer",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    ring: "outer",
  },
  {
    name: "Node.js",
    category: "Runtime",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ring: "outer",
  },
  {
    name: "Flask",
    category: "Backend",
    iconUrl: "https://cdn.simpleicons.org/flask",
    ring: "outer",
  },
  {
    name: "OpenCV",
    category: "Computer Vision",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    ring: "outer",
  },
  {
    name: "Hugging Face",
    category: "NLP & ML",
    iconUrl: "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/huggingface-color.svg",
    ring: "outer",
  },
  {
    name: "Java",
    category: "Language",
    iconUrl: "https://cdn.jsdelivr.net/gh/selfhst/icons/svg/java.svg",
    ring: "outer",
  },
  {
    name: "OpenCode",
    category: "Coding Agent",
    iconUrl: "https://cdn.simpleicons.org/opencode",
    ring: "outer",
  },
  {
    name: "JavaScript",
    category: "Language",
    iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/javascript.svg",
    ring: "outer",
  },
  {
    name: "ShadCN",
    category: "Component Library",
    iconUrl: "https://cdn.simpleicons.org/shadcnui/FFFFFF",
    ring: "outer",
  },
  {
    name: "Clerk",
    category: "Authentication",
    iconUrl: "https://cdn.simpleicons.org/clerk",
    ring: "outer",
  },
  {
    name: "Vercel",
    category: "Deployment",
    iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/vercel-light.svg",
    ring: "outer",
  },
  {
    name: "Render",
    category: "Deployment",
    iconUrl: "https://cdn.simpleicons.org/render/FFFFFF",
    ring: "outer",
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    title:
      "How AI Learns: A Beginner’s Guide to Linear Regression, Cost Functions, and Gradient Descent",
    description:
      "An intuitive breakdown of the mathematical foundations behind machine learning—exploring how models predict values with linear regression, measure error using cost functions, and optimize parameters via gradient descent.",
    coverImage: "/images/articles/how_ai_learns.webp",
    url: "https://rangamudunkotuwa1729.medium.com/how-ai-learns-a-beginners-guide-to-linear-regression-cost-functions-and-gradient-descent-cbe25cbd04ba?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title:
      "Why I Stopped Writing useEffect for Data Fetching (And What I Use Instead)",
    description:
      "A practical look at the pitfalls of manual useEffect data fetching—such as race conditions, waterfall requests, and boilerplate state management—and modern declarative alternatives for cleaner React applications.",
    coverImage: "/images/articles/react_query.webp",
    url: "https://rangamudunkotuwa1729.medium.com/why-i-stopped-writing-useeffect-for-data-fetching-and-what-i-use-instead-8974fb43725c?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title:
      "A Beginner’s Guide to Machine Learning: Concepts, Categories, and Real-World Applications",
    description:
      "A structured introduction to core machine learning paradigms—covering supervised, unsupervised, and reinforcement learning alongside practical real-world industry use cases.",
    coverImage: "/images/articles/ml_beginner.webp",
    url: "https://rangamudunkotuwa1729.medium.com/a-beginners-guide-to-machine-learning-concepts-categories-and-real-world-applications-cd4994a4ee11?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title: "The Story of WPA2 Wi-Fi",
    description:
      "An exploration of wireless network security—tracing the evolution from WEP and WPA to WPA2, AES-CCMP encryption, and the 4-way handshake that secures modern Wi-Fi connections.",
    coverImage: "/images/articles/wpa2_security.webp",
    url: "https://rangamudunkotuwa1729.medium.com/the-story-of-wpa2-wi-fi-c94d6f9fbd74?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title: "MD5 Hashing Algorithm",
    description:
      "A deep dive into how the MD5 message-digest algorithm processes arbitrary data into 128-bit hashes, its internal bit-manipulation rounds, and why cryptographic collision vulnerabilities led to its deprecation.",
    coverImage: "/images/articles/md5_hashing.webp",
    url: "https://rangamudunkotuwa1729.medium.com/md5-hashing-algorithm-721464ce9f73?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title: "Nyquist-Shannon Theory of Signal Sampling",
    description:
      "Understanding the bridge between continuous analog signals and discrete digital systems—explaining sampling rates, the Nyquist limit, and how aliasing occurs when signals are undersampled.",
    coverImage: "/images/articles/nyquist_shannon.webp",
    url: "https://rangamudunkotuwa1729.medium.com/nyquist-shannon-theory-of-signal-sampling-25c9d4ebefc6?sharedUserId=rangamudunkotuwa1729",
  },
  {
    title: "Beauty of the Skip List Data Structure",
    description:
      "How probabilistic multi-level linked lists achieve O(log n) search, insertion, and deletion performance without the complex rebalancing overhead of balanced binary search trees.",
    coverImage: "/images/articles/skip_list.webp",
    url: "https://rangamudunkotuwa1729.medium.com/beauty-of-the-skip-list-data-structure-df5ffbdb867d?sharedUserId=rangamudunkotuwa1729",
  },
];