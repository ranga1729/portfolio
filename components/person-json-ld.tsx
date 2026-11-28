import { PERSONAL_NUMBER } from "@/data/general";

// components/person-json-ld.tsx
export default function PersonJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rangamudunkotuwa.vercel.app/";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Ranga Mudunkotuwa",
      alternateName: [
        "DMRB Mudunkotuwa",
        "Ranga Bandara Mudunkotuwa",
        "ranga1729",
      ],
      url: siteUrl,
      image: `${siteUrl}/images/profile.jpg`,
      telephone: {PERSONAL_NUMBER},
      jobTitle: ["Full-Stack Software Engineer", "ICT Tutor"],
      description:
        "Full-Stack Software Engineer specializing in ASP.NET Core, React.js, Next.js, and AI integrations (RAG, Gemini API, MCP), and G.C.E. O/L ICT Tutor teaching Grades 06–11 in Homagama and Habarakada.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Homagama",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of Colombo School of Computing",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of Moratuwa",
        },
        {
          "@type": "EducationalOrganization",
          name: "Royal College, Colombo 7",
        },
      ],
      worksFor: [
        { "@type": "Organization", name: "FACTn Software" },
        { "@type": "Organization", name: "Calcey Technologies" },
        {
          "@type": "EducationalOrganization",
          name: "Siyes Institute",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Homagama",
            addressCountry: "LK",
          },
        },
        {
          "@type": "EducationalOrganization",
          name: "Thakshila Institute",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Habarakada",
            addressCountry: "LK",
          },
        },
      ],
      knowsAbout: [
        "Information and Communication Technology (ICT)",
        "G.C.E. Ordinary Level (O/L) ICT",
        "ASP.NET Core",
        "C#",
        "Next.js",
        "React",
        "TypeScript",
        "Python",
        "Retrieval-Augmented Generation (RAG)",
        "Google Gemini API",
        "Model Context Protocol (MCP)",
        "PostgreSQL",
        "Microsoft Azure",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "G.C.E. O/L ICT Classes (Grades 06–11)",
        url: `${siteUrl}/class`,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "G.C.E. O/L ICT Classes — Siyes Institute (Homagama)",
              description:
                "Weekly ICT classes for Grades 06 to 11 on Thursdays, Fridays, and Sundays at Siyes Institute, Homagama.",
              provider: {
                "@type": "EducationalOrganization",
                name: "Siyes Institute",
              },
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Course",
              name: "G.C.E. O/L ICT Classes — Thakshila Institute (Habarakada)",
              description:
                "Weekly ICT classes for Grades 10 and 11 on Saturdays at Thakshila Institute, Habarakada.",
              provider: {
                "@type": "EducationalOrganization",
                name: "Thakshila Institute",
              },
            },
          },
        ],
      },
      sameAs: [
        "https://github.com/ranga1729",
        "https://www.linkedin.com/in/rangabandara1729",
        "https://rangamudunkotuwa1729.medium.com",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}