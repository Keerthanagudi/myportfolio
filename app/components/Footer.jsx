'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <>
      {/* Top Contact Info */}
      <div className="w-full text-center font-Ovo px-[12%] mb-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src={assets.logo} alt="Keerthana Logo" className="w-40 mx-auto mb-2" />
        </div>

        {/* Contact Info */}
        <div className="text-gray-700 space-y-3">
          <div className="flex items-center justify-center gap-2 text-base font-semibold">
            <Image src={assets.mail_icon} alt="Email Icon" className="w-6 h-6" />
            <a
              href="mailto:keerthanagudi08@gmail.com"
              className="text-lg hover:text-[#059ECE] transition-colors"
            >
              keerthanagudi08@gmail.com
            </a>
          </div>
          <div className="flex justify-center gap-6 text-base font-semibold">
            <a
              href="https://github.com/Keerthanagudi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#059ECE] transition-colors text-lg"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-reddy-gudi-ba91aa203/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#059ECE] transition-colors text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <footer className="w-full pt-10 border-t text-sm text-gray-500 text-center font-Ovo px-[12%]">
        &copy; June 4, 2025 Keerthana Reddy Gudi. All rights reserved.
      </footer>
    </>
  )
}

export default Footer
