"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Projects from './Projects'
import { useSectionInView } from '@/lib/hooks'

const Project = () => {

  const {ref} = useSectionInView('Projects',0.5);

  return (
    <section 
    ref = {ref}
    id='projects' className='scroll-mt-28 mb-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {
            projectsData.map((project,index)=>(
             
             <React.Fragment key={index}>
                 <Projects {...project}/>
              </React.Fragment> 
             

            ))
          }
        </div>
    </section>
  )
}




export default Project