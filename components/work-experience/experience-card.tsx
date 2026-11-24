"use client";

import { motion } from "motion/react";
import CompanyHeader from "./company-header";
import CompanyProjects from "./company-projects";
import { ExperienceItem } from "@/types/general";

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="rounded-xl border border-border bg-card/70 p-6 sm:p-8 transition-colors duration-300 hover:border-accent"
    >
      <CompanyHeader
        company={experience.company}
        role={experience.role}
        index={index}
      />
      <CompanyProjects projects={experience.projects} />
    </motion.article>
  );
}