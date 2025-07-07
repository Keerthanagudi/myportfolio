'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Semantic Search Engine',
    subtitle: 'ML | NLP | Streamlit',
    image: assets.work1,
    github: 'https://github.com/Keerthanagudi/Semantic-search-engine'
  },
  {
    title: 'Cyber Bullying Detection',
    subtitle: 'Flask | NLTK | ML',
    image: assets.work2,
    github: 'https://github.com/Keerthanagudi'
  },
  {
    title: 'Intrusion Detection System',
    subtitle: 'Chi-square | Random Forest',
    image: assets.work3,
    github: 'https://github.com/Keerthanagudi'
  },
  {
    title: 'Fake News Detection',
    subtitle: 'TF-IDF | Decision Tree',
    image: assets.work4,
    github: 'https://github.com/Keerthanagudi/Fake-News-Detection-Minor'
  }
]

// Animation variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

const Projects = () => {
  return (
    <section id="projects" className="w-full px-[12%] py-20 text-center scroll-mt-28">
      <motion.h2
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        custom={0}
        className="text-4xl font-Ovo mb-12"
      >
        My latest projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index + 1}
            className="relative block w-[220px] h-[340px] mx-auto overflow-hidden rounded-xl shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-black/50"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-md flex items-center justify-between">
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                <p className="text-sm text-gray-600">{project.subtitle}</p>
              </div>
              <Image
                src={assets.right_arrow_bold}
                alt="arrow"
                className="w-6 h-6"
              />
            </div>
          </motion.a>
        ))}
      </div>

      <motion.a
        href="https://github.com/Keerthanagudi"
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={projects.length + 1}
        className="inline-block mt-12 px-6 py-2 text-base font-semibold text-white bg-black rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
      >
        Show More on GitHub
      </motion.a>
    </section>
  )
}

export default Projects
