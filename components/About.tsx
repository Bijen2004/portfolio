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
        <p className='mb-3 font-medium'>
            Coding Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its ...
        </p>
        <p className='font-medium'>
            hobby handy Lorem Ipsum Generator that helps to create dummy
        </p>
    </motion.section>
  )
}

export default About