"use client";

import { motion, type Variants } from "motion/react";
import TimelineNode from "./timeline-node";
import EducationCard from "./education-card";
import { EducationItem } from "@/types/general";

interface EducationTimelineItemProps {
  item: EducationItem;
}

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function EducationTimelineItem({
  item,
}: EducationTimelineItemProps) {
  const isInProgress = item.status === "In-Progress";

  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="group relative grid grid-cols-1 gap-4 pl-9 md:grid-cols-[200px_1fr] md:gap-10 md:pl-0"
    >
      {/* Desktop Date Label */}
      <div className="hidden md:flex md:flex-col md:items-end md:pt-5 md:text-right">
        <span className="font-mono text-xs tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
          {item.period}
        </span>
      </div>

      {/* Rail Marker */}
      <TimelineNode isInProgress={isInProgress} />

      {/* Content Card */}
      <EducationCard item={item} />
    </motion.div>
  );
}