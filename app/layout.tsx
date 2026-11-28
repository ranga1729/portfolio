import type { Metadata } from "next";
import { Geist, Geist_Mono, Host_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PersonJsonLd from "@/components/person-json-ld";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ranga1729s-projects.vercel.app/";

export const metadata: Metadata = {
  // metadataBase: new URL(SITE_URL),  
  title: {
    default: "Ranga Mudunkotuwa | Full-Stack Software Engineer & AI Developer",
    template: "%s | Ranga Mudunkotuwa",
  },
  description: "Portfolio of Ranga Mudunkotuwa (DMRB Mudunkotuwa), Full-Stack Software Engineer specializing in ASP.NET Core, React, Next.js, and production AI systems.",
  keywords: [
    "Ranga Mudunkotuwa",
    "Ranga Bandara",
    "Ranga Bandara Mudunkotuwa",
    "ranga1729",
    "DMRB Mudunkotuwa",
    "Full-Stack Software Engineer Sri Lanka",
    "ASP.NET Core Developer",
    "Next.js Developer",
    "AI Engineer",
    "ICT Class",
    "OL ICT Class", 
    "Homagama ICT Class",
  ],
  authors: [{ name: "Ranga Mudunkotuwa", url: SITE_URL }],
  creator: "Ranga Mudunkotuwa",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Ranga",
    lastName: "Mudunkotuwa",
    username: "ranga1729",
    title: "Ranga Mudunkotuwa — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in ASP.NET Core, React/Next.js, and AI integrations. UCSC B.I.T. undergraduate and former intern at FACTn Software & Calcey Technologies.",
    url: SITE_URL,
    siteName: "Ranga Mudunkotuwa",
    images: [
      {
        url: "/images/profile_seo.jpg",
        width: 1200,
        height: 630,
        alt: "Ranga Mudunkotuwa - Full-Stack Software Engineer | ICT Tutor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranga Mudunkotuwa | Full-Stack Software Engineer | ICT Tutor",
    description:
      "ASP.NET Core, Next.js, and production AI integrations (RAG, Gemini API, MCP).",
    images: ["/images/profile_seo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${hostGrotesk.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground items-center justify-center">
        <PersonJsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
