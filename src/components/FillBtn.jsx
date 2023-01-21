import React from 'react'

const Fillbtn = ({text,className}) => {
  return (
    <a href="toChange">
    <button className={`relative border flex justify-center items-center border-brandGreen px-6 sm:px-16 h-10 sm:h-12 mt-5 font-mono text-brandGreen text-xs sm:text-base tracking-widest
    after:absolute after:bottom-0 after:right-0
    after:w-2 after:h-2 after:bg-brandGreen
    before:absolute before:-z-10 before:top-0 before:left-0 before:w-0 before:h-full before:bg-brandGreen
    hover:text-black hover:before:w-full before:duration-300 ${className}`} >{text}</button>
    </a>
  )
}

export default Fillbtn