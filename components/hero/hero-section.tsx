import Lightfall from "../background/Lightfall";
import SideRays from "../background/SideRays";
import DecryptedText from "../animated-texts/DecryptedText";
import RotatingText from "../animated-texts/RotatingText";
import ScrollDownIndicator from "../scroll-down-indicator";
import ShapeWaves from "../ShapeWaves";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-5rem)] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* <Lightfall
          colors={["#E0E0E0", "#888888"]}
          backgroundColor="#121212"
          speed={0.3}
          streakCount={2}
          streakWidth={0.8}
          twinkle={0.3}
          backgroundGlow={0.1}
          headGlow={0.6}
          bloom={0.35}
          mouseInteraction
          holdToWarp
          intro
          streakLength={1}
          density={0.6}
          glow={1}
          depth={0.5}
          zoom={3}
          mouseStrength={0.4}
          mouseRadius={0.45}
          lens={0.5}
          fade={0}
          lightMode={false}
        /> */}
        {/* <SideRays
          rayColor1="#FFC46B"
          rayColor2="#96c8ff"
          origin="top-right"
          speed={2.5}
          intensity={2}
          spread={2}
          density={5}
          followMouse
          blend={0.6}
          sharpness={0.5}
          tilt={0}
          falloff={1.6}
          glow={2}
          saturation={1}
          dust={0}
          mouseInfluence={0.5}
          intro
          lightMode={false}
          opacity={1}
        /> */}
        <ShapeWaves
          text="1729"
          fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
          fontWeight={500}
          textSize={1}
          shapes="mixed"
          cellSize={10}
          dotSize={0.75}
          color="#292931"
          hoverColor="#aaaaaa"
          backgroundColor="#1b1b1d"
          speed={1}
          scale={1}
          contrast={1}
          brightness={0.4}
          flow={0}
          direction={0}
          fade={0.25}
          interactive
          splashRadius={40}
          splashStrength={0.4}
          glow={0.35}
          intro
          introDuration={2}
          paused={false}
        />
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10 w-full px-6 sm:px-16 pointer-events-none text-center">
        <p className="font-mono text-5xl mb-5">Hello, I&apos;m ,</p>
        <h1 className="pointer-events-auto inline-block font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
          <DecryptedText
            text="Ranga Mudunkotuwa"
            animateOn="inViewHover"
            effect="scramble"
            sequential
            revealDirection="start"
            speed={60}
            maxIterations={10}
            hoverRadius={100}
            scrambleColor="#888888"
            loop={false}
            loopDelay={2000}
            useOriginalCharsOnly={false}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
            parentClassName="inline-block"
            className="text-foreground"
            encryptedClassName="text-muted-foreground"
            clickMode="once"
          />
        </h1>

        <div className="mt-8 flex justify-center">
          <div className="pointer-events-auto inline-flex items-baseline justify-center gap-2.5 whitespace-nowrap font-heading text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[1.1] text-foreground">
            <span className="font-mono">I&apos;m a</span>
            <RotatingText
              texts={["Developer", "Teacher", "Student", "Guitarist"]}
              effect="drop"
              direction="up"
              className="inline-flex font-bold"
              highlight
              highlightColor="transparent"
              staggerFrom="last"
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              rotationInterval={2000}
              splitBy="characters"
              blur={0}
              auto
              loop
              pauseOnHover={false}
            />
          </div>
        </div>
      </div>

      {/* Decorative Bottom Scroll Indicator */}
      <ScrollDownIndicator />
    </section>
  );
}