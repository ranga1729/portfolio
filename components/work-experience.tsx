"use client";

import { motion } from "motion/react";
import { Briefcase, BuildingComplex, FolderGit2 } from "lucide-react";
import { WORK_EXPERIENCES } from "@/data/general";
import SectionHeader from "./section-header";

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full scroll-mt-20 border-t border-border px-6 sm:px-16 py-24"
    >
      <SectionHeader 
        subtitle={"02 // Experience"} 
        title={"Experience"} 
      />

      {/* Experience Cards */}
      <div className="flex flex-col gap-8 mt-8">
        {WORK_EXPERIENCES.map((experience, expIndex) => (
          <motion.article
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: expIndex * 0.1 }}
            className="rounded-xl border border-border bg-card/70 p-6 sm:p-8 transition-colors duration-300 hover:border-accent"
          >
            {/* Company & Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-6 border-b border-border/70">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground">
                  <BuildingComplex className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.role}
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs text-muted-foreground">
                0{expIndex + 1}
              </span>
            </div>

            {/* Projects Under Company */}
            <div className="mt-6 flex flex-col gap-8 divide-y divide-border/60">
              {experience.projects.map((project, projIndex) => (
                <div
                  key={project.title}
                  className={projIndex > 0 ? "pt-8" : undefined}
                >
                  {/* Project Title & Summary */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <FolderGit2 className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />
                    <div>
                      <h4 className="font-heading text-base sm:text-lg font-medium text-foreground">
                        {project.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 mb-5 flex flex-wrap gap-2 pl-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Contributions List */}
                  <ul className="space-y-2.5 pl-6 text-sm leading-relaxed text-muted-foreground">
                    {project.highlights.map((item) => (
                      <li key={item.lead} className="relative pl-4">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-2.25 h-1.5 w-1.5 rounded-full bg-accent"
                        />
                        <span className="font-medium text-foreground">
                          {item.lead}
                        </span>{" "}
                        {item.detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}