"use client";
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link';
import {HiDownload} from "react-icons/hi"
import {BsLinkedin} from "react-icons/bs"
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {

    const {ref} = useSectionInView('Home',0.5);
    const {setActiveSection,setTimeOfLastClick} = useActiveSectionContext();


  return (
    <section 
    ref = {ref}
    className='mb-28 max-w-[50rem] text-center sm:mb-0 z-20 scroll-mt-40' id='home'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2
                }}>
                <Image src="/Bijen.jpg" alt='Bijen' width="192" height="192" quality="95" priority={true}
                className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
                </motion.div>
                <motion.span className='absolute bottom-0 right-0 text-4xl '
                 initial={{opacity:0,scale:0}}
                 animate={{opacity:1,scale:1}}
                 transition={{
                     type:"spring",
                     stiffness:125,
                     delay:0.1,
                     duration:0.7,
                 }}>😎</motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}>
           <span className='font-bold'>I am Bijen Shrestha, currently studying Software Engineering at PCPS College. I really enjoy developing apps and websites. As a fresher, my goal is to become a web developer.</span> 
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row gap-3 items-center justify-center px-4 text-lg font-medium'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:0.1,
        }}>
            <Link href={"#contact"} className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-white/30' onClick={()=>{
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
            }}>Contact me</Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none hover:scale-110  active:scale-105  transition cursor-pointer border border-black/10 focus:border-2 focus:border-gray-900 dark:bg-white/10' href='/CV.pdf' download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1" /></a>
            <div className='flex flex-row gap-3 items-center justify-center px-4 text-lg font-medium'>
                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full outline-none hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 focus:border-2 focus:border-gray-900 dark:bg-white/10 dark:text-white/60' href='https://www.linkedin.com/in/bijen-shrestha-3633a1276/' target='_blank'><BsLinkedin /></a>
                <a className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 focus:border-2 focus:border-gray-900 dark:bg-white/10 dark:text-white/60' href='https://github.com/Bijen2004' target='_blank'><FaGithubSquare /></a>
            </div>
           
        </motion.div>
    </section>
  )
}

export default Intro