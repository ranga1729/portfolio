'use client'

import { motion } from "framer-motion"
import { Layers, Package, Palette } from "lucide-react"

export function Services() {
  const projects = [
    {
      image: Palette,
      title: 'Brand Identity',
      description: 'Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand\'s essence.'
    },
    {
      icon: Package,
      title: 'Package Design',
      description: 'Bringing your brand to life through high-fidelity product mockups, giving you a clear, realistic preview of how your packaging and visuals will stand out in the real world.'
    },
    {
      icon: Layers,
      title: 'Brand Design',
      description: 'Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.'
    },
    {
      icon: Layers,
      title: 'Mockup Design',
      description: 'Tailored design mockups that align perfectly with your brand\'s aesthetic — because every detail matters when showcasing your product\'s true potential.'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">
            Projects
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 px-5">
        {projects.map((service, index) => {
          const Icon = service.image
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 bg-gray-800 rounded-2xl p-5"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-300 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}