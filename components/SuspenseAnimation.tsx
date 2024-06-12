import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SuspenseAnimation = () => {
  return (
    <>
    <div className=' relative w-screen h-screen flex flex-col items-center justify-center bg-black text-white m-0 text-2xl gap-2 overflow-hidden -mt-36'>
        <motion.div
        initial={{x:'-100vw',scale:1}}
        animate={{x:0,scale:1.5}}
        className='-ml-[100px] font-semibold'>Bijen</motion.div>
        <motion.div 
        
        initial={{x:'200vw',scale:1}}
        animate={{x:0,scale:1.5}}
        className='ml-[100px] font-semibold'>Shrestha</motion.div>

        <motion.div
        initial={{x:'200vw',scale:1}}
        animate={{x:0,scale:1.5}}
        className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
            <Image src='/background28.png' alt='logo' width={200} height={80} />
        </motion.div>    
    </div>
    </>
    
  )
}

export default SuspenseAnimation