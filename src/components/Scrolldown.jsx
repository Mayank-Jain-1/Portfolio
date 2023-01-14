import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

const Scrolldown = () => {
  return (
    // <div style={{writingMode: "vertical-lr"}}>Scrolldown &rarr;</div>
    <div style={{writingMode: "vertical-lr"}} className='text-white flex w-7  bg-slate-500 items-center'>
      <span className='inline-block animate-wiggle'>scroll down</span>
        <AiOutlineArrowDown className='mt-3'/>

    </div>
  )
}

export default Scrolldown