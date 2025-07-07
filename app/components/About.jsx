import React from 'react';
import Image from 'next/image';
import { assets, infoList} from '@/assets/assets';
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
     id='about' className='w-full px-[12%] py-10 scroll-mt-20 '
    initial={{ opacity: 0 }}
    whileInView={{ opacity:1 }}
    transition={{duration :1 }}>
      <motion.h4
          initial={{ opacity: 0,y:-20 }}
    whileInView={{ opacity:1,y:0 }}
    transition={{duration :0.5, delay:0.3 }} 
      className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
        initial={{ opacity: 0,y:-20 }}
        whileInView={{ opacity:1,y:0 }}
        transition={{duration :0.5, delay:0.5 }} 
       className='text-center text-5xl font-Ovo'>About me</motion.h2>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1}}
        transition={{duration :0.8 }} 
      className='flex w-full flex-col lg:flex-row 
      items-center gap-20 my-20'>

        <motion.div
          initial={{ opacity: 0,scale:0.9 }}
          whileInView={{ opacity:1,scale:1 }}
          transition={{duration :0.6 }}  
          className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' 
            className='w-full rounded-3xl' />
        </motion.div>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity:1 }}
        transition={{duration :0.6, delay:0.8 }} 
        className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                I'm a computer science graduate student with hands-on experience in machine learning,
                 cloud computing, and data engineering. I've developed intelligent systems using Python, implemented NLP-driven solutions, and contributed to projects involving data analysis,
                  cybersecurity, and system optimization. With a strong foundation in scalable architecture and a 
                  passion for emerging technologies, I'm actively seeking entry-level roles as a Data Engineer, 
                  Cloud Engineer, or Software Developer—where I can apply my skills, grow continuously, and deliver
                meaningful impact.
            </p> 
            <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity:1 }}
            transition={{duration :0.8, delay:1 }} 
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-3xl'>
 
                {infoList.map(({icon,iconDark,title, description},index)=>(
                    <motion.li 
                    whileInView={{ scale:1.05}}
                    key={index} className='border-[1px] border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                    <Image src={icon} alt={title} className='w-8 mx-auto mb-4' />
                    <h3 className='mb-2 font-semibold text-gray-800 text-lg'>{title}</h3>
                    <p className='text-sm text-gray-600'>{description}</p>
                    </motion.li>

                ))}
                
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
