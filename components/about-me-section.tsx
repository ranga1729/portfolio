"use client";

import { motion, type Variants } from "motion/react";
import { Code2, GraduationCap, BookOpen, Music } from "lucide-react";
import DecryptedText from "./animated-texts/DecryptedText";
import TechStack from "./tech-stack";

const ROLES = [
  {
    index: "01",
    title: "Developer",
    icon: Code2,
    description:
      "Building full-stack web applications with a focus on clean architecture, responsive interfaces, and smooth motion.",
  },
  {
    index: "02",
    title: "Teacher",
    icon: BookOpen,
    description:
      "Breaking down complex technical concepts into clear, practical lessons and mentoring peers along the way.",
  },
  {
    index: "03",
    title: "Student",
    icon: GraduationCap,
    description:
      "Continuously exploring software engineering fundamentals, modern web tooling, and system design.",
  },
  {
    index: "04",
    title: "Guitarist",
    icon: Music,
    description:
      "Spending downtime practicing fingerstyle, chord voicings, and rhythm away from the keyboard.",
  },
];

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
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            01 // Introduction
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            <DecryptedText
              text="About Me"
              animateOn="inViewHover"
              effect="scramble"
              sequential
              revealDirection="start"
              speed={50}
              maxIterations={8}
              scrambleColor="#888888"
              className="text-foreground"
              encryptedClassName="text-muted-foreground"
            />
          </h2>
        </motion.div>

        {/* Main Bio + Focus Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Narrative Bio */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between gap-8 lg:col-span-5"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg font-medium text-foreground">
                I&apos;m Ranga Mudunkotuwa—a developer, educator, and lifelong
                learner focused on crafting minimal, functional digital
                experiences.
              </p>
              <p>
                Whether I&apos;m architecting frontend interfaces, teaching
                programming concepts, or diving deeper into computer science
                coursework, I value clarity, precision, and thoughtful
                execution.
              </p>
              <p>
                When I step away from code, you&apos;ll usually find me with a
                guitar in hand, working through new arrangements and rhythm
                patterns.
              </p>
            </div>

            <TechStack />
          </motion.div>

          {/* Right Column: 2x2 Role Bento Cards */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7"
          >
            {ROLES.map(({ index, title, icon: Icon, description }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">
                    {index}
                  </span>
                  <Icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>

                <div>
                  <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}