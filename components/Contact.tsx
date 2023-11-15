"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion"
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './SubmitButton';
import toast from "react-hot-toast"

const Contact = () => {

  const {ref} = useSectionInView('Contact',0.5);

  return (
    <motion.section 
    ref={ref}
    id='contact'
    initial={{
      opacity:0,
    }}
    whileInView={{
      opacity:1
    }}
    transition={{
      duration:1
    }}
    viewport={{
      once:true,
    }}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a href="mailto:shrbijen31@gmail.com" className='font-medium underline'>shrbijen31@gmail.com</a> or through this form.</p>
        <form className='mt-10 flex flex-col dark:text-black' 
        action={ async formData =>{
          const {data,error} = await sendEmail(formData);

          if(error){
            alert(error);
            return;
          }
          toast.success('Email sent successfully');
        }}>
            <input className='h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' 
            name='senderEmail'
            type="email" required maxLength={500} placeholder='your email'/>
            <textarea 
            name='message'
            className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' required maxLength={5000} placeholder='your message'></textarea>
            <SubmitButton />
            </form>
    </motion.section>
  )
}

export default Contact