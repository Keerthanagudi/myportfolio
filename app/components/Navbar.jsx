'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY >50){
            setIsScroll(true)
        }else{
            setIsScroll(false)
        }
      })
    },[])
  return (
    <>

    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>

    <nav className={`w-full fixed top-0 left-0 z-50 bg-white shadow-sm ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between">

        {/* Left: Logo */}
        <div className="min-w-[140px]">
          <a href="#top">
            <Image
              src={assets.logo}
              alt="Logo"
              width={220}
              height={70}
              className="cursor-pointer"
            />
          </a>
        </div>

        {/* Center: Nav links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full border border-gray-200 shadow-sm bg-opacity-50">
          <li><a href="#top" className="font-Ovo hover:text-[#059ECE]">Home</a></li>
          <li><a href="#about" className="font-Ovo hover:text-[#059ECE]">About Me</a></li>
          <li><a href="#skills" className="font-Ovo hover:text-[#059ECE]">Skills</a></li>
          <li><a href="#projects" className="font-Ovo hover:text-[#059ECE]">Projects</a></li>
        </ul>

        {/* Right: Contact */}
        <div className="flex items-center gap-4">

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:text-[#059ECE]">
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow Icon"
              className="w-3"
            />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6' />
          </button>

        </div>
        {/* --------------mobile menu------------*/}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 
        fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
          
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
          </div>

          <li><a href="#top" className='font-Ovo  hover:text-[#059ECE]' onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className='font-Ovo  hover:text-[#059ECE]' onClick={closeMenu}>About Me</a></li>
          <li><a href="#skills" className='font-Ovo  hover:text-[#059ECE]' onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className='font-Ovo  hover:text-[#059ECE]' onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" className='font-Ovo hover:text-[#059ECE]' onClick={closeMenu}>Contact Me</a></li>  
        </ul>

      </div>
    </nav>
    </>
  )
}

export default Navbar
