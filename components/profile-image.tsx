"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import profile from "@/public/images/profile.jpg";

export default function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress as the component enters and centers in the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center center"],
  });

  // Smooth the raw scroll value to remove mouse-wheel stepping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Retract top and bottom covers outward into the adjacent sections
  const curtainScaleY = useTransform(smoothProgress, [0, 1], [1, 0]);

  // Subtle inverse zoom on the image for vertical depth during reveal
  const scale = useTransform(smoothProgress, [0, 1], [1.14, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background"
    >
      {/* Full-Width Image Layer */}
      <motion.div
        style={{ scale }}
        className="w-full will-change-transform"
      >
        <Image
          src={profile}
          alt="Ranga Mudunkotuwa - Full-Stack Software Engineer | ICT Tutor"
          className="w-full h-auto object-cover block"
          priority
        />
      </motion.div>

      {/* Upper Cover (Blends with HeroSection and retracts upward) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleY: curtainScaleY }}
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[24%] origin-top border-b border-border bg-background will-change-transform"
      />

      {/* Lower Cover (Blends with AboutMeSection and retracts downward) */}
      <motion.div
        aria-hidden="true"
        style={{ scaleY: curtainScaleY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[24%] origin-bottom border-t border-border bg-background will-change-transform"
      />
    </section>
  );
}