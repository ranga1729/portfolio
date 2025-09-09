'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import profile_pic from "../public/Profile_Pic.jpg"

export default function About() {
  const skills = [
    'Product Design', 'Brand Identity Design', 'UX Design', 
    'Branding', 'Packaging Design', 'Figma', 'Photoshop'
  ]

  const experience = [
    { role: 'Freelance', company: 'GreenLeaf Co', period: 'Currently' },
    { role: 'Brand Designer', company: 'UrbanFit Studio', period: '2023-24' },
    { role: 'Package Designer', company: 'GreenK Studio', period: '2020-22' },
  ]

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              I'm Meily, a passionate Brand Identity & Package Designer based in Tokyo. 
              I specialize in crafting bold visual identities and packaging that captivate 
              and inspire, blending creativity with strategy to elevate brands.
            </p>

            <div className="mb-10">
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

            <div>
              <h3 className="text-xl font-semibold text-gray-300 mb-4">Experience</h3>
              <div className="space-y-4">
                 {experience.map((exp, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-400">{exp.role}</p>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
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