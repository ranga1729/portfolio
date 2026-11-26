"use client";

import { useState } from "react";
import { motion, type PanInfo } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ROLES } from "@/data/general";
import RoleCard from "./role-card";

const SWIPE_THRESHOLD = 75;

export default function RoleCardsDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDeckHovered, setIsDeckHovered] = useState(false);

  const total = ROLES.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -400) {
      handleNext();
    } else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 400) {
      handlePrev();
    }
  };

  // Compute fanned stack transforms based on each card's depth in the deck
  const getStackLayerStyle = (stackPosition: number) => {
    switch (stackPosition) {
      case 0: // Front active card
        return {
          x: 0,
          y: isDeckHovered ? -4 : 0,
          rotate: 0,
          scale: 1,
          opacity: 1,
          zIndex: 40,
        };
      case 1: // Second card (peeking right)
        return {
          x: isDeckHovered ? 34 : 18,
          y: isDeckHovered ? -22 : -14,
          rotate: isDeckHovered ? 6 : 3.5,
          scale: 0.96,
          opacity: 0.88,
          zIndex: 30,
        };
      case 2: // Third card (peeking left)
        return {
          x: isDeckHovered ? -34 : -18,
          y: isDeckHovered ? -34 : -24,
          rotate: isDeckHovered ? -6 : -3.5,
          scale: 0.92,
          opacity: 0.68,
          zIndex: 20,
        };
      default: // Back card
        return {
          x: 0,
          y: isDeckHovered ? -44 : -32,
          rotate: isDeckHovered ? 2 : 1,
          scale: 0.88,
          opacity: 0.45,
          zIndex: 10,
        };
    }
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* Interactive Floating Deck Stage */}
      <div
        onMouseEnter={() => setIsDeckHovered(true)}
        onMouseLeave={() => setIsDeckHovered(false)}
        style={{ perspective: 1100 }}
        className="relative mt-8 flex h-71.25 w-full max-w-107.5 items-center justify-center sm:h-75"
      >
        {ROLES.map((role, idx) => {
          const stackPosition = (idx - activeIndex + total) % total;
          const isActive = stackPosition === 0;
          const layer = getStackLayerStyle(stackPosition);

          return (
            <motion.div
              key={role.title}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.65}
              onDragEnd={isActive ? handleDragEnd : undefined}
              animate={{
                x: layer.x,
                y: layer.y,
                rotate: layer.rotate,
                scale: layer.scale,
                opacity: layer.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
                mass: 0.9,
              }}
              style={{ zIndex: layer.zIndex }}
              className="absolute inset-0 will-change-transform"
            >
              <RoleCard
                role={role}
                isActive={isActive}
                stackPosition={stackPosition}
                onSelect={() => {
                  if (!isActive) {
                    setActiveIndex(idx);
                  }
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Minimal Deck Controls & Role Indicator */}
      {/* <div className="mt-6 flex w-full max-w-107.5 items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          {ROLES.map((role, idx) => {
            const selected = idx === activeIndex;
            return (
              <button
                key={role.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show ${role.title} role`}
                className={`rounded-md border px-2 py-1 font-mono text-[11px] transition-colors duration-200 ${
                  selected
                    ? "border-accent bg-card text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-1 hidden font-mono text-[11px] text-muted-foreground sm:inline">
            Drag or click to cycle
          </span>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous role"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next role"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div> */}
    </div>
  );
}