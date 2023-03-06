import React from 'react'

const LoadingBar = ({progress,className,setFlag}) => {

  return (
    <div onAnimationEnd={() => setFlag(true)} className={`${className} overflow-hidden rounded-lg w-64 h-0.5 relative bg-dark flex justify-end items-center `}>
      <div className="absolute z-0 bg-gradient-to-r from-brandPurple to-brandGreen w-full h-full"></div>
      <div className='animate-loading absolute right-0 z-10 h- bg-dark h-full'></div>
    </div>
  )
}

export default LoadingBar