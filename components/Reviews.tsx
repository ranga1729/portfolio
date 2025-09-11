'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export function Reviews() {
  const reviews = [
    {
      name: 'Richards Johnson',
      role: 'Creative Director & Lead Designer',
      content: 'Working with Meily was a seamless experience. Her ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!',
      rating: 5.0
    },
    {
      name: 'June Lee',
      role: 'CEO of GreenRoots',
      content: 'Meily\'s strategic approach to design brought our brand vision to life. The packaging and brand elements she developed elevated our aesthetic and aligned perfectly with our sustainability values.',
      rating: 5.0
    },
    {
      name: 'Jona Carter',
      role: 'Founder of EcoLux',
      content: 'Every project Meily touches turns into a perfect blend of design and purpose. She crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.',
      rating: 5.0
    },
    {
      name: 'Sofia Toms',
      role: 'Founder at GreenK Studios',
      content: 'Meily\'s designs speak for themselves — bold, strategic, and impactful. She took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product\'s visibility.',
      rating: 5.0
    }
  ]

  return (
    <section id="reviews" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from clients who trusted my design expertise to elevate their brands successfully.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
                <span className="ml-2 text-gray-600 font-medium">{review.rating}</span>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{review.content}"
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-gray-600 text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}