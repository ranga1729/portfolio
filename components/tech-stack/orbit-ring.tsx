"use client";

import { useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import type { TechStackItem } from "@/data/general";
import OrbitNode from "./orbit-node";

interface OrbitRingProps {
  items: TechStackItem[];
  radius: number;
  duration: number;
  direction?: 1 | -1;
}

export default function OrbitRing({
  items,
  radius,
  duration,
  direction = 1,
}: OrbitRingProps) {
  const [hoveredCount, setHoveredCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const ringRotation = useMotionValue(0);

  const isPaused = hoveredCount > 0 || Boolean(prefersReducedMotion);
  const diameter = radius * 2;

  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const degreesPerMs = 360 / (duration * 1000);
    const nextAngle =
      (ringRotation.get() + delta * degreesPerMs * direction) % 360;
    ringRotation.set(nextAngle);
  });

  const handleNodeHoverChange = (hovered: boolean) => {
    setHoveredCount((prev) => Math.max(0, prev + (hovered ? 1 : -1)));
  };

  if (items.length === 0) return null;

  return (
    <div
      style={{ width: diameter, height: diameter }}
      className={`pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/70 transition-colors duration-300 ${
        hoveredCount > 0 ? "z-40 border-accent/70" : "z-10"
      }`}
    >
      <motion.div
        style={{ rotate: ringRotation }}
        className="relative h-full w-full will-change-transform"
      >
        {items.map((item, index) => {
          const angle = (360 / items.length) * index;
          return (
            <OrbitNode
              key={item.name}
              item={item}
              angle={angle}
              radius={radius}
              ringRotation={ringRotation}
              onHoverChange={handleNodeHoverChange}
            />
          );
        })}
      </motion.div>
    </div>
  );
}