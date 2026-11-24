"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";

interface TimelineNodeProps {
  isInProgress?: boolean;
}

export default function TimelineNode({
  isInProgress = false,
}: TimelineNodeProps) {
  return (
    <motion.div
      initial={{ scale: 0.75, opacity: 0.4 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
      className="absolute left-0 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-accent md:left-52"
    >
      {isInProgress ? <span
        className="h-2 w-2 rounded-full transition-colors duration-300 animate-pulse bg-foreground" /> : <Check className="h-4 w-4" />}
    </motion.div>
  );
}