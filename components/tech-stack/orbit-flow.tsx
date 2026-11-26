"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import type { TechStackItem } from "@/data/general";
import OrbitCore from "./orbit-core";
import OrbitRing from "./orbit-ring";

interface OrbitFlowProps {
  items: TechStackItem[];
}

const STAGE_SIZE = 640;

export default function OrbitFlow({ items }: OrbitFlowProps) {
  const { innerItems, middleItems, outerItems } = useMemo(
    () => ({
      innerItems: items.filter((item) => item.ring === "inner"),
      middleItems: items.filter((item) => item.ring === "middle"),
      outerItems: items.filter((item) => item.ring === "outer"),
    }),
    [items]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-105 min-h-105 w-full items-center justify-center overflow-hidden border border-border bg-card/40 sm:h-140 sm:min-h-140 md:h-185 md:min-h-185"
    >
      {/* Subtle Radial Ambient Depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,224,224,0.05)_0%,transparent_65%)]"
      />

      {/* Responsive Orbital Stage */}
      <div
        style={{ width: STAGE_SIZE, height: STAGE_SIZE }}
        className="relative flex shrink-0 scale-50 items-center justify-center sm:scale-75 md:scale-100"
      >
        <OrbitCore />

        <OrbitRing
          items={innerItems}
          radius={115}
          duration={28}
          direction={1}
        />

        <OrbitRing
          items={middleItems}
          radius={205}
          duration={40}
          direction={-1}
        />

        <OrbitRing
          items={outerItems}
          radius={295}
          duration={54}
          direction={1}
        />
      </div>
    </motion.div>
  );
}