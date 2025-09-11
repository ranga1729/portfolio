'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col justify-center items-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-300 mb-6 leading-tight">
            John Doe
            <br />
            <span className="text-gray-400">Aspiring Web Developer</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 font-medium"
          >
            Building skills & seeking opportunities...
          </motion.p>
          
          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating clean and functional web applications. 
            Currently exploring React, JavaScript, and modern web technologies. 
            Open to internship opportunities where I can learn and grow as a developer.
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              View My Work
            </button>
            
            <div className="mt-16 flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-4">Scroll down</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="text-gray-400" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
