// components/FAQ.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What services do you provide?',
      answer: 'I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.'
    },
    {
      question: 'How do I start working with you?',
      answer: 'Simply reach out through the contact form or email. We\'ll schedule a consultation to discuss your project needs and timeline.'
    },
    {
      question: 'What design tools do you use?',
      answer: 'I primarily use Figma for design work, Photoshop for image editing, and various other tools depending on project requirements.'
    },
    {
      question: 'How long does a project take?',
      answer: 'Most projects are completed within 2-3 days, depending on complexity and scope. I always provide clear timelines upfront.'
    },
    {
      question: 'Do you provide revisions?',
      answer: 'Yes, I include revisions in all my packages to ensure the final design meets your expectations and requirements.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'I work across various industries including sustainability, fitness, beauty, food & beverage, and technology sectors.'
    },
    {
      question: 'Do you offer development services?',
      answer: 'My primary focus is on design. For development needs, I can recommend trusted partners who specialize in implementation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Pricing varies based on project scope and complexity. I offer transparent pricing with detailed quotes for each project.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! I can help redesign your existing website or create entirely new brand experiences from scratch.'
    }
  ]

  const skills = ['Product Design', 'Brand Identity Design', 'Branding']

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              FAQ'S
            </h2>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Answers
            </h3>
            <p className="text-lg text-gray-600 mb-12">
              Find answers to common questions about my design process, services etc…
            </p>

            <div className="mb-8">
              <div className="flex flex-wrap gap-3 mb-6">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-lg">FAQ Design Image</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <Minus className="text-gray-600 flex-shrink-0" size={20} />
                    ) : (
                      <Plus className="text-gray-600 flex-shrink-0" size={20} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200"
                      >
                        <div className="px-6 py-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}