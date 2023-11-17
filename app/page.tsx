import About from '@/components/About'
import Contact from '@/components/Contact'
import Expertise from '@/components/Expertise'
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
      <Expertise />
      <Contact />
    </main>
  )
}

export default Portfolio