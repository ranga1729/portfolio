'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { RotatingText } from './ui/shadcn-io/rotating-text'
import Image from 'next/image'

import LinkedIn from '@/public/socials/linkedin.png'
import Medium from '@/public/socials/medium.png'
import WhatsApp from '@/public/socials/whatsapp.png'
import Facebook from '@/public/socials/facebook.png'
import Instagram from '@/public/socials/instagram.png'
import Link from 'next/link'

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
            Ranga Mudunkotuwa
            <br />
            <RotatingText 
              text={["Web Development", "Machine Learning", "Cyber & Networking"]}
              duration={3000}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className='text-gray-400'
            />
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-xl text-gray-600 mb-4 font-medium flex flex-col items-center text-center"
          >
            <p className="mb-2">Find me on</p>

            <div className="flex flex-wrap justify-center items-center bg-gray-700 p-3 rounded-2xl mt-5 gap-4 w-fit">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LinkedIn}
                  alt="LinkedIn"
                  height={35}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </a>

              <Link
                href="https://medium.com"
                target="_blank"
              >
                <Image
                  src={Medium}
                  alt="Medium"
                  height={35}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </Link>

              <Link
                href="https://wa.me/1234567890" // Replace with your WhatsApp number
                target="_blank"
              >
                <Image
                  src={WhatsApp}
                  alt="WhatsApp"
                  height={35}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </Link>

              <Link
                href="https://www.facebook.com"
                target="_blank"
              >
                <Image
                  src={Facebook}
                  alt="Facebook"
                  height={35}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </Link>

              <Link
                href="https://www.instagram.com"
                target="_blank"
              >
                <Image
                  src={Instagram}
                  alt="Instagram"
                  height={35}
                  className="hover:scale-110 transition-transform duration-200"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            
            <div className="mt-16 flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-4">Scroll down</p>
              <a href={'#about'}>
                <motion.nav
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className='hover:bg-gray-700 p-2 rounded-full'
                >
                  <ChevronDown className="text-gray-400" size={24} />
                </motion.nav>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
