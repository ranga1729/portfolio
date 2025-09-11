// components/Stats.tsx
'use client'

import { motion } from 'framer-motion'

export function Stats() {
  const stats = [
    { number: '180+', label: 'design projects completed.' },
    { number: '96%', label: 'Client satisfaction rate.' },
    { number: '15+', label: 'Years of experience' }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {stat.number}
              </h3>
              <p className="text-xl text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}