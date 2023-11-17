"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks';


const About = () => {

  const {ref} = useSectionInView('About');
  
  return (
    <motion.section 
    ref = {ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    >
       <SectionHeading>About me</SectionHeading>
        <p className='mb-4 font-medium leading-7'>
        I am Bijen Shrestha, currently studying Software Engineering at PCPS College. I really enjoy developing apps and websites. As a fresher, my goal is to become a full-stack developer. My primary focus is React, Next.js, and Java. I love working with tailwind css for designing web interfaces and framer motion for interactive user interface animations. I am currently looking for a freelancing job or a full-time position as a web developer. 
        </p>
        <p className='font-medium leading-7'>
        Apart from coding, I find immense joy in playing basketball and riding bike. These activities keep me active and refreshed. Alongside these, I&rsquo;m also learning to play the guitar.
        </p>
    </motion.section>
  )
}

export default About