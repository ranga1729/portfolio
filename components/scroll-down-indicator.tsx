"use client";

import { motion, useReducedMotion } from "motion/react";

function ChevronGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 3L14 13L25 3"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ScrollDownIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 select-none sm:bottom-8"
    >
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
      >
        {/* Upper Bright White Chevron */}
        <motion.span
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [1, 0.45, 1], y: [0, 2, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="block text-white"
        >
          <ChevronGlyph className="h-4 w-7" />
        </motion.span>

        {/* Lower Translucent Chevron */}
        <motion.span
          animate={
            prefersReducedMotion
              ? undefined
              : { opacity: [0.35, 0.9, 0.35], y: [0, 2, 0] }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.22,
          }}
          className="-mt-1.5 block text-white/40"
        >
          <ChevronGlyph className="h-4 w-7" />
        </motion.span>
      </motion.div>
    </motion.div>
  );
}