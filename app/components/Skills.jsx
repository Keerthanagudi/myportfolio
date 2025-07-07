'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', icon: assets.python },
  { name: 'Java', icon: assets.java },
  { name: 'C', icon: assets.c },
  { name: 'AWS', icon: assets.aws },
  { name: 'SQL', icon: assets.sql },
  { name: 'Power BI', icon: assets.powerbi },
  { name: 'HTML', icon: assets.html },
  { name: 'CSS', icon: assets.css },
  { name: 'Jupyter', icon: assets.jupyter },
  { name: 'VS Code', icon: assets.vscode },
  { name: 'Windows', icon: assets.windows },
]

const certifications = [
  { title: 'AWS Cloud 101', issuer: 'Amazon Web Services' },
  { title: 'Power BI Virtual Internship', issuer: 'PwC' },
  { title: 'Generative AI Fundamentals', issuer: 'Databricks' },
  { title: 'SQL Essential Training', issuer: 'LinkedIn Learning' },
  { title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy' },
  { title: 'AI For Everyone', issuer: 'Coursera' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy' },
  { title: 'Programming for Everybody (Python)', issuer: 'Coursera' },
  { title: 'AICTE NEAT - Cybersecurity Internship', issuer: 'AICTE' },
]

const Skills = () => {
  const [showAll, setShowAll] = useState(false)
  const certsToShow = showAll ? certifications : certifications.slice(0, 8)

  return (
    <section id="skills" className="w-full px-[12%] py-16 text-center scroll-mt-28">
      <motion.h2
        className="text-4xl font-Ovo mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8 mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="text-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 rounded-full bg-white border border-gray-300 shadow-md flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-105 group-hover:shadow-xl perspective">
              <Image src={skill.icon} alt={skill.name} className="w-10 h-10" />
            </div>
            <p className="mt-2 text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.h2
        className="text-4xl font-Ovo mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {certsToShow.map((cert, idx) => (
          <motion.div
            key={idx}
            className="p-4 bg-white shadow-lg rounded-lg border border-gray-300 hover:shadow-black/50 hover:bg-lightHover transition-transform duration-300 hover:scale-[1.05] text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-1">{cert.title}</h4>
            <p className="text-sm text-gray-600">{cert.issuer}</p>
          </motion.div>
        ))}
      </motion.div>

      {certifications.length > 8 && (
        <motion.button
          className="mt-8 px-6 py-2 text-base font-semibold text-white bg-black rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
          onClick={() => setShowAll(!showAll)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </motion.button>
      )}
    </section>
  )
}

export default Skills
