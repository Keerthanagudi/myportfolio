'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="Profile" className="rounded-full w-32" />
      </motion.div>

      {/* Intro */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Keerthana Reddy Gudi
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Aspiring Data & Cloud Engineer
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-base text-gray-700 px-4"
      >
        Computer science graduate with a focus on cloud computing, data engineering, and intelligent systems.
        Experienced in Python, SQL, and AWS, and passionate about applying technology to solve real-world problems.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        
        {/* Contact Me Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </motion.a>

        {/* Download Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
          <Image src={assets.download_icon} alt="download icon" className="w-4" />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
