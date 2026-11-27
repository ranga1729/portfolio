"use client";

import { motion, type Variants } from "motion/react";
import RoleCardsDeck from "./hero/role-cards-deck";
import SectionHeader from "./section-header";
import { ABOUTE_ME_MAIN_TEXT, ABOUTE_ME_SUB_TEXT } from "@/data/general";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
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

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="flex flex-col gap-16"
      >
        <SectionHeader title={"About Me"} />

        {/* Main Bio + Focus Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center justify-center">
          {/* Left Column: Narrative Bio + Highlights + Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-8 lg:col-span-5"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg font-medium text-foreground text-justify">
                {ABOUTE_ME_MAIN_TEXT}
              </p>
            </div>
          </motion.div>

          {/* Right Column: 2x2 Role Bento Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:col-span-7"
          >
            <RoleCardsDeck />
          </motion.div>
          </motion.div>
        </div>
        <div className="mx-20 text-center">
          <p> {ABOUTE_ME_SUB_TEXT} </p>
        </div>
      </motion.div>
    </section>
  );
}