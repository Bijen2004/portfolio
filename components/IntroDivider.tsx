"use client";
import React from 'react'
import {motion} from "framer-motion"

const IntroDivider = () => {
  return (
        <motion.div className='bg-gray-200 mb-3 mt-5 h-1 w-[400px] rounded-full hidden sm:block dark:bg-opacity-20'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
            delay:0.125
        }}
        ></motion.div>
  )
}

export default IntroDivider