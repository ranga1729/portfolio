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

  // Expand the mask from a cropped, rounded frame to full container edges
  const clipPath = useTransform(
    smoothProgress,
    [0, 1],
    ["inset(14% 18% 14% 18% round 24px)", "inset(0% 0% 0% 0% round 0px)"]
  );

  // Subtle upward translation during entry
  const y = useTransform(smoothProgress, [0, 1], [48, 0]);

  // Inverse zoom on the image so edges reveal outward smoothly
  const scale = useTransform(smoothProgress, [0, 1], [1.2, 1]);

  return (
    <section ref={containerRef} className="w-full overflow-hidden">
      <motion.div
        style={{ clipPath, y }}
        className="w-full overflow-hidden will-change-[clip-path,transform]"
      >
        <motion.div
          style={{ scale }}
          className="w-full will-change-transform"
        >
          <Image
            src={profile}
            alt="Profile Image"
            className="w-full h-auto object-cover block"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}