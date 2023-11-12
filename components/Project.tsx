import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import Projects from './Projects'

const Project = () => {
  return (
    <section id='projects' className='scroll-mt-28'>
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {
            projectsData.map((project,index)=>(
             <>
             <React.Fragment key={index}>
                 <Projects {...project}/>
              </React.Fragment> 
             </>

            ))
          }
        </div>
    </section>
  )
}




export default Project