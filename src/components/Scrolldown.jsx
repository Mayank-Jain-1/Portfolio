import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

const Scrolldown = ({className}) => {
  return (
    // <div style={{writingMode: "vertical-lr"}}>Scrolldown &rarr;</div>
    <div style={{writingMode: "vertical-lr"}} className={`text-white text-xs sm:text-sm font-semibold flex w-7  items-center  ${className}`}>
      <span className='inline-block animate-wiggle'>scroll down</span>
        <AiOutlineArrowDown className='mt-2'/>

    </div>
  )
}

export default Scrolldown