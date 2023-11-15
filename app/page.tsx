import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Intro from '@/components/Intro'
import Project from '@/components/Project'
import SectionDivider from '@/components/SectionDivider'
import Skills from '@/components/Skills'
import React from 'react'

const Portfolio = () => {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Project />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}

export default Portfolio