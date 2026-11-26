"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useTransform,
  type MotionValue,
} from "motion/react";
import type { TechStackItem } from "@/data/general";

interface OrbitNodeProps {
  item: TechStackItem;
  angle: number;
  radius: number;
  ringRotation: MotionValue<number>;
  onHoverChange: (isHovered: boolean) => void;
}

export default function OrbitNode({
  item,
  angle,
  radius,
  ringRotation,
  onHoverChange,
}: OrbitNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Counter-rotate against parent ring rotation so the icon and tooltip stay level
  const counterRotation = useTransform(ringRotation, (value) => -value);

  const handleEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
      }}
      className={`pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
        isHovered ? "z-50" : "z-10"
      }`}
    >
      <motion.div
        style={{ rotate: counterRotation }}
        className="relative flex items-center justify-center will-change-transform"
      >
        <button
          type="button"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onFocus={handleEnter}
          onBlur={handleLeave}
          aria-label={`${item.name} (${item.category})`}
          className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border bg-card/90 p-2.5 shadow-md shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-foreground hover:bg-card focus-visible:scale-110 focus-visible:border-foreground focus-visible:outline-none"        >
          <img
            src={item.iconUrl}
            alt={item.name}
            loading="lazy"
            draggable={false}
            className="h-6 w-6 object-contain opacity-85 grayscale-25 transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
          />
        </button>

        {/* Hover / Focus Name Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.96 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute -top-11 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card/95 px-2.5 py-1 shadow-lg shadow-black/60 backdrop-blur-md"
            >
              <span className="font-mono text-xs font-medium text-foreground">
                {item.name}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}