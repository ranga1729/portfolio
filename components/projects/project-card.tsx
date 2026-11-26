"use client";

import Link from "next/link";
import { motion } from "motion/react";
import ProjectCardHeader from "./project-card-header";
import ProjectCardBody from "./project-card-body";
import { ProjectItem } from "@/types/general";
import ProjectTechStack from "./project-tech-stack";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${project.title} repository on GitHub`}
        className="group flex h-full flex-col rounded-xl border border-border bg-card/70 p-6 transition-colors duration-300 hover:border-accent focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ProjectCardHeader index={index} />

        <div className="mb-6 flex-1">
          <ProjectCardBody
            title={project.title}
            description={project.description}
          />
        </div>
        <ProjectTechStack techStack={project.techStack} />
      </Link>
    </motion.div>
  );
}