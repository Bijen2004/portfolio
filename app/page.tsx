import About from '@/components/About'
import Intro from '@/components/Intro'
import Project from '@/components/Project'
import SectionDivider from '@/components/SectionDivider'
import React from 'react'

const Portfolio = () => {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
      <Project />
    </main>
  )
}

export default Portfolio