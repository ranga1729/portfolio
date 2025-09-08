import { Hero } from "@/components/Hero";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 0, 0)"
      gradientBackgroundEnd="rgb(0, 0, 82)"
      firstColor="rgb(10, 10, 92)"
      secondColor="rgb(221, 74, 255)"
      thirdColor="rgb(100, 220, 255)"
      fourthColor="rgb(200, 50, 50)"
      fifthColor="rgb(180, 180, 50)"
      pointerColor="rgb(140, 100, 255)"
    >
      <Hero />
      {/* <About />
      <Process />
      <Services />
      <Reviews />
      <Stats />
      <FAQ /> */}
    </BackgroundGradientAnimation>
  );
}
