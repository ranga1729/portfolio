'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import profile_pic from "../public/ranga.jpg"

export default function About() {
  const skills = [
    "React", "Next JS", "Javascript", "Typescript", "SQL",
    "Postgres", "MongoDB", "C#", "ASP.NET Core", "Python",
    "Git", "GitHub","Docker", "Machine Learning", "Pandas",
    "Agile", "Scrum", "Team working", "Business Communication"

  ]

  const experience = [
    { role: 'Full-Time Student', company: 'University of Colombo School of Computing', period: '2024-Nov - Present' },
    { role: 'Full Stack developer - Intern', company: 'Calcey Technologies', period: '2024-May - 2024-Nov' },
    { role: 'Apprenticeship Student', company: 'Calcey Technologies', period: '2023-Feb - 2024-May' },
  ]

  const education = [
    {certification: "Bachelor of Information Technology - 3rd year", institute: "University of Colombo School of Computing", status:"UG(Current GPA: 3.99)"},
    {certification: "GCE Advanced Level-Maths stream", institute: "Royal College, Colombo 7", status:"B-Phy C-Maths C-Chem"},
    {certification: "GCE Ordinary Level", institute: "Homagama Maha Vidyalaya", status:"9A's"},
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
              Hello,
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I'm Ranga, a passionate Tech enthusiast & self learner. 
              I specialize in Web Development and Machine Learning.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Experience</h3>
              <div className="space-y-4">
                 {experience.map((exp, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-300">{exp.role}</p>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Education</h3>
              <div className="space-y-4">
                 {education.map((edu, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-300">{edu.certification}</p>
                      <p className="text-gray-400">{edu.institute}</p>
                    </div>
                    <span className="text-sm text-gray-500">{edu.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-300 mb-4"> Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-auto w-full rounded-3xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center p-5 bg-gradient-to-br from-gray-600 to-gray-800">
                <Image src={profile_pic} alt={"Profile Picture"} height={500} width={500}></Image>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}