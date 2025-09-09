'use client'

import { motion } from 'framer-motion'
import { Search, Send, CheckCircle } from 'lucide-react'

import article_1 from "../public/article_1.webp"
import article_2 from "../public/article_2.webp"
import article_3 from "../public/article_3.webp"
import Image from 'next/image'
import Link from 'next/link'

export function Articles() {
  const articlesList = [
    {
      title: 'MD5 Hashing Algorithm',
      description: 'Find the perfect plan tailored to your needs, offering the right balance of features, flexibility, and value to help you achieve your goals effortlessly.',
      icon: Search,
      image: article_1,
      link: "https://medium.com/@rangamudunkotuwa1729/md5-hashing-algorithm-721464ce9f73"
    },
    {
      title: 'Nyquist-Shannon Theory of Signal Sampling',
      description: 'Easily submit your design requirements through our private design portal, ensuring a seamless process where your vision is understood, refined, and brought to life with precision and creativity.',
      icon: Send,
      image: article_2,
      link: "https://medium.com/@rangamudunkotuwa1729/nyquist-shannon-theory-of-signal-sampling-25c9d4ebefc6"
    },
    {
      title: 'Beauty of the Skip List',
      description: 'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.',
      icon: CheckCircle,
      image: article_3,
      link: "https://medium.com/@rangamudunkotuwa1729/beauty-of-the-skip-list-data-structure-df5ffbdb867d"
    },
    {
      title: 'Beauty of the Skip List',
      description: 'As a dedicated freelancer, I ensure your project is completed with precision and delivered within 2-3 days. With a keen eye for detail and a passion for quality, I bring your vision to life—on time and beyond expectations.',
      icon: CheckCircle,
      image: article_3,
      link: "https://medium.com/@rangamudunkotuwa1729/beauty-of-the-skip-list-data-structure-df5ffbdb867d"
    }
  ]

  return (
    <section id="process" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-300 mb-4"
          >
            Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400"
          >
            Crafting bold visuals that inspire and elevate brands with thought process.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {articlesList.map((article, index) => {
            return (
              <Link href={article.link} target='_blank' key={index} className="flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center rounded-xl bg-gray-900 p-4 hover:bg-gray-800 transition-colors duration-300 w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md"
                  onHoverStart={() => console.log(article.link)}
                >
                  <div className="relative mb-4 flex flex-col justify-center items-center">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      height={160} 
                      width={300} 
                      className='rounded-xl w-full h-40 object-cover'
                    />
                  </div>
                                
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-300 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {article.description}
                  </p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}