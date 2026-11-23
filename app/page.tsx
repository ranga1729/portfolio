import HeroSection from "@/components/hero";
import ProfileImage from "@/components/profile-image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-6xl flex-col items-center justify-between border-x">
        <HeroSection />
        <ProfileImage />
        <p className="border w-full text-center h-100">
          Other content
        </p>
      </main>
    </div>
  );
}