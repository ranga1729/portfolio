"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { RoleItem } from "@/types/general";

interface RoleCardProps {
  role: RoleItem;
  isActive: boolean;
  stackPosition: number;
  onSelect?: () => void;
}

export default function RoleCard({
  role,
  isActive,
  stackPosition,
  onSelect,
}: RoleCardProps) {
  const { title, image, tag } = role;

  // Subtle 3D tilt values for the active front card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 24 });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        isActive
          ? { rotateX, rotateY, transformStyle: "preserve-3d" }
          : undefined
      }
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: stackPosition * 0.45,
      }}
      className={`group relative flex h-full w-full select-none flex-col rounded-2xl border bg-card p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-colors duration-300 ${
        isActive
          ? "cursor-grab border-border hover:border-accent active:cursor-grabbing"
          : "cursor-pointer border-border/80 hover:border-accent/80"
      }`}
    >
      {/* Subtle Top Edge Specular Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-foreground/20 to-transparent"
      />

      {/* Visual Slot (Hugs card border with minimal inset) */}
      <div className="relative w-full flex-1 overflow-hidden rounded-xl border border-border/60 bg-background">
        <Image
          src={image}
          alt={`${title} role illustration`}
          fill
          draggable={false}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Row: Role Title + Tag */}
      <div className="flex items-baseline justify-between gap-3 px-1.5 pt-3 pb-1">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {title}
        </h3>
        {tag && (
          <span className="truncate font-mono text-xs text-muted-foreground">
            {tag}
          </span>
        )}
      </div>
    </motion.div>
  );
}