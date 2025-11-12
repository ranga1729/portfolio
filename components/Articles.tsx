'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

import skip_list from "../public/skip_list.webp"
import nyquist from "../public/nyquist.webp"
import md5 from "../public/md5.webp"
import wpa2 from "../public/wpa2.webp"
import ml1 from "../public/ml1.webp"
import ml2 from "../public/ml2.webp"

export function Articles() {
  const articlesList = [
    {
      title: "How AI Learns",
      description: "A Beginner’s Guide to Linear Regression, Cost Functions and Gradient Descent",
      image: ml2,
      link: "https://rangamudunkotuwa1729.medium.com/how-ai-learns-a-beginners-guide-to-linear-regression-cost-functions-and-gradient-descent-cbe25cbd04ba"
    },
    {
      title: "A Beginner's Guide to Machine Learning",
      description: "A Beginner's Guide to Machine Learning: Concepts, Categories, and Real-World Applications.",
      image: ml1,
      link: "https://rangamudunkotuwa1729.medium.com/a-beginners-guide-to-machine-learning-concepts-categories-and-real-world-applications-cd4994a4ee11"
    },
    {
      title: 'WPA2 Wi-Fi Security: Unpacking the 4-Way Handshake & Key Derivation',
      description: "WPA2 Wi-Fi Security: Unpacking the 4-Way Handshake & Key Derivation Wi-Fi is based on the IEEE 802.11 protocols(Ex: 802.11a/b/g/n/…). This defines the architecture, MAC and Physical-Layer …",
      image: wpa2,
      link: "https://medium.com/@rangamudunkotuwa1729/the-story-of-wpa2-wi-fi-c94d6f9fbd74"
    },
    {
      title: 'MD5 Hashing Algorithm',
      description: "A deep dive into the MD5 hashing algorithm. Explore its 5-step process, its critical security flaws, and why you should use modern hashes like SHA-2.",
      image: md5,
      link: "https://medium.com/@rangamudunkotuwa1729/md5-hashing-algorithm-721464ce9f73"
    },
    {
      title: 'Nyquist-Shannon Theory of Signal Sampling',
      description: "Nyquist — Shannon Theory of Signal Sampling Recently, I came across this equation to find the maximum data rate of a noiseless channel. (B: Bandwidth of the channel, M: Number of discrete levels in …",
      image: nyquist,
      link: "https://medium.com/@rangamudunkotuwa1729/nyquist-shannon-theory-of-signal-sampling-25c9d4ebefc6"
    },
    {
      title: 'Beauty of the Skip List',
      description: "Beauty of the Skip List Data Structure While learning data structures and algorithms, I came across a fascinating data structure called “Skip Lists.” The intriguing part isn't just the data …",
      image: skip_list,
      link: "https://medium.com/@rangamudunkotuwa1729/beauty-of-the-skip-list-data-structure-df5ffbdb867d"
    },
  ]

  return (
    <section id="articles" className="py-20">
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
                  className="text-center rounded-xl bg-gray-900 p-2 hover:bg-gray-800 transition-colors duration-300 w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-sm"
                  onHoverStart={() => console.log(article.link)}
                >
                  <div className="relative mb-4 flex flex-col justify-center items-center">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      height={160} 
                      width={300} 
                      className='rounded-xl w-full h-50 object-cover'
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