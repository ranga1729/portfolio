import AboutMeSection from "@/components/about-me-section";
import ArticlesSection from "@/components/articles/articles-section";
import EducationSection from "@/components/education/education-section";
import HeroSection from "@/components/hero-section";
import ProfileImage from "@/components/profile-image";
import ProjectsSection from "@/components/projects/projects-section";
import TechStackSection from "@/components/tech-stack/tech-stack-section";
import WorkExperienceSection from "@/components/work-experience/work-experience-section";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between border-x">
        <HeroSection />
        <ProfileImage />
        <AboutMeSection />
        <WorkExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <TechStackSection />
        <ArticlesSection />
        <p className="border w-full text-center h-100">
          Other content
        </p>
      </main>
    </div>
  );
}