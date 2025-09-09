import About from "@/components/About";
import { Hero } from "@/components/Hero";
import { Articles } from "@/components/Articles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-t from-gray-950 via-gray-950 to-gray-900">
        <Hero />
        <About />

        {/* editable */}

        <Articles />
      </div>

      <BackgroundBeams />
    
    {/* <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 0, 0)"
      gradientBackgroundEnd="rgb(0, 0, 82)"
      firstColor="rgb(10, 10, 92)"
      secondColor="rgb(221, 74, 255)"
      thirdColor="rgb(100, 220, 255)"
      fourthColor="rgb(200, 50, 50)"
      fifthColor="rgb(180, 180, 50)"
      pointerColor="rgb(140, 100, 255)"
    > */}
      
      {/* <Process />
      <Services />
      <Reviews />
      <Stats />
      <FAQ /> */}
    {/* </BackgroundGradientAnimation> */}
    </>
  );
}
