"use client";
import React from 'react'
import {motion} from "framer-motion"

const SectionDivider = () => {
  return (
        <motion.div className=' bg-gray-200 my-0 sm:my-24 sm:h-16 sm:w-1 rounded-full dark:bg-opacity-20'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:0.125
        }}
        ></motion.div>
  )
}

export default SectionDivider