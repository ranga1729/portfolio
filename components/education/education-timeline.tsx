"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import EducationTimelineItem from "./education-timeline-item";
import { EducationItem } from "@/types/general";

interface EducationTimelineProps {
  items: EducationItem[];
}

export default function EducationTimeline({ items }: EducationTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div ref={timelineRef} className="relative">
      {/* Static Background Rail */}
      <div
        aria-hidden="true"
        className="absolute bottom-2 left-2.75 top-2 w-px bg-border md:left-54.75"
      />

      {/* Scroll-Scrubbed Foreground Progress Rail */}
      <motion.div
        aria-hidden="true"
        style={{ scaleY: lineScaleY }}
        className="absolute bottom-2 left-2.75 top-2 w-px origin-top bg-foreground will-change-transform md:left-54.75"
      />

      <div className="flex flex-col gap-10">
        {items.map((item) => (
          <EducationTimelineItem
            key={`${item.period}-${item.title}`}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}