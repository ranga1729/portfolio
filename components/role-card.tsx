"use client";

import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface RoleItem {
  index: string;
  title: string;
  icon: LucideIcon;
  tag?: string;
  description: string;
}

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
  const { index, title, icon: Icon, description } = role;

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
      // Subtle deterministic ambient floating drift
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: stackPosition * 0.45,
      }}
      className={`group relative flex h-full w-full select-none flex-col justify-between rounded-2xl border bg-card p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.65)] transition-colors duration-300 ${
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

      {/* Top Row: Index + Minimal Icon Badge */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {index}
        </span>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      {/* Bottom Row: Role Title + Description */}
      <div className="mt-8">
        <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}