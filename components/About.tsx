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
        Hey there! I'm studying software engineering and love working with React, Next.js, and Java. I'm open for freelance gigs or jobs. I enjoy solving problems and want to keep learning and building cool stuff in the tech world. Let's work together and create something awesome!
        </p>
        <p className='font-medium leading-7'>
        Apart from coding, I find immense joy in playing basketball and riding bike. These activities keep me active and refreshed. Alongside these, I'm also learning to play the guitar.
        </p>
    </motion.section>
  )
}

export default About