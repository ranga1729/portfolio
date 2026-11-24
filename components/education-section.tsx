"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import DecryptedText from "./animated-texts/DecryptedText";
import { EDUCATION_HISTORY } from "@/data/general";

const cardVariants: Variants = {
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

export default function EducationSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress across the timeline container
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const lineScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      id="education"
      className="w-full scroll-mt-20 border-t border-border px-6 py-24 sm:px-16"
    >
      <div className="flex flex-col gap-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            02 // Education
          </span>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            <DecryptedText
              text="Education"
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

        {/* Scroll-Driven Vertical Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Background Static Rail */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-2.75 top-2 w-px bg-border md:left-54.75"
          />

          {/* Foreground Scroll-Filled Progress Rail */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY: lineScaleY }}
            className="absolute bottom-2 left-2.75 top-2 w-px origin-top bg-foreground will-change-transform md:left-54.75"
          />

          <div className="flex flex-col gap-10">
            {EDUCATION_HISTORY.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.period}-${item.title}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  className="group relative grid grid-cols-1 gap-4 pl-9 md:grid-cols-[200px_1fr] md:gap-10 md:pl-0"
                >
                  {/* Left Column (Desktop Date Label) */}
                  <div className="hidden md:flex md:flex-col md:items-end md:pt-5 md:text-right">
                    <span className="font-mono text-xs tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {item.period}
                    </span>
                  </div>

                  {/* Timeline Node Marker */}
                  <motion.div
                    initial={{ scale: 0.75, opacity: 0.4 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 top-5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 group-hover:border-accent md:left-52"
                  >
                    <span
                      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                        item.status === "In-Progress"
                          ? "bg-foreground animate-pulse"
                          : "bg-muted-foreground group-hover:bg-foreground"
                      }`}
                    />
                  </motion.div>

                  {/* Right Column (Content Card) */}
                  <div className="rounded-xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent">
                    {/* Mobile Date Badge */}
                    <span className="mb-2 block font-mono text-xs text-muted-foreground md:hidden">
                      {item.period}
                    </span>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-accent group-hover:text-foreground">
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Metadata Pills (GPA, Stream, Results, Status) */}
                    {item.highlights.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2 border-t border-border/70 pt-4">
                        {item.highlights.map((detail) => (
                          <span
                            key={detail.label}
                            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                          >
                            <span>{detail.label}:</span>
                            <span className="font-medium text-foreground">
                              {detail.value}
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}