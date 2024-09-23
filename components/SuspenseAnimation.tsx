import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../public/portfolio.json';

const SuspenseAnimation = () => {
  return (
    <>
    <div className=' relative w-screen h-screen flex flex-col items-center justify-center bg-black text-white m-0 text-2xl gap-2 overflow-hidden -mt-36'>
        <Lottie
        animationData={animationData}
        loop={false}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
    </>
    
  )
}

export default SuspenseAnimation