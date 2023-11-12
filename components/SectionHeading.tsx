import React from 'react'

type SectionProps ={
    children:React.ReactNode;
}

const SectionHeading = ({children}:SectionProps) => {
  return (
    <h2 className='text-3xl font-semibold capitalize mb-8 text-center'>{children}</h2>
  )
}

export default SectionHeading