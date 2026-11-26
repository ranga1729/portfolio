"use client";

import { motion, type Variants } from "motion/react";
import RoleCardsDeck from "./role-cards-deck";
import SectionHeader from "./section-header";

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Narrative Bio + Highlights + Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-8 lg:col-span-5"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg font-medium text-foreground text-justify">
                I'm a Full-stack Software Engineer specializing in ASP.NET Core, React.js, and production AI integrations. 
                I'm experienced in architecting scalable, multi-tenant applications and deploying secure backend infrastructure 
                with a Proven track record of translating complex business requirements into production-ready systems with a strong emphasis on clean architecture, system reliability, and code quality. 
              </p>
              <p>
                Outside of shipping code and studies, I enjoy writing technical articles, teaching, and picking up my guitar.
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
      </motion.div>
    </section>
  );
}