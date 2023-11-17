"use client";

import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import {motion} from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

const fadeInAnimationVariants = {
    initial : {
        opacity : 0,
        y:100
    },
    animate : (index : number) => ({
        opacity:1,
        y:0,
        transition:{
            delay:0.05 * index,
        },
    }),
};

const Skills = () => {

    const {ref} = useSectionInView('Skills');

  return (
    <section 
    ref = {ref}
    id='skills'
    className='mb-28 max-w-[58rem] scroll-mt-28 texi-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        
        <ul className='flex flex-wrap gap-2 justify-center text-lg text-gray-800 '>
            {
                skillsData.map((skill,index)=>(
                    <motion.li className='bg-[#caf1fa] border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-[#caf1fa]/30 dark:text-white/80 flex flex-col items-center justify-center gap-2' key={index}
                   variants={fadeInAnimationVariants}
                   initial="initial"
                   whileInView="animate" 
                   viewport={{
                    once : true,
                   }}
                    custom={index}
                    >
                        <div className='text-2xl'>
                        {skill.icon}
                        </div>
                        <div>
                        {skill.name}
                        </div>
                        </motion.li>
                ))
            }
        </ul>
    </section>
  )
}

export default Skills