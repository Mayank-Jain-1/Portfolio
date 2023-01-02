import React from 'react'
import Line from './Line'
import {useSelector, useDispatch} from 'react-redux'
import {toggleNav} from "../actions/index.js";

const Hamburger = ({flag, toggleFunction,   className}) => {
  
  const isOpen = useSelector((state)=> state.navControl)
  const dispatch = useDispatch();

  return (
    <button onClick={()=> dispatch(toggleNav())} className={`relative flex flex-col items-center bg-black bg-opacity-50 w-8 h-8 p-2 rounded-md ${className}`}>
      <Line className={`top-0 duration-300 ${isOpen && '-rotate-45 translate-y-2'}`} />
      <Line className={`top-1.5 duration-300 ${isOpen && 'rotate-90 scale-0 -translate-x-3'}`} />
      <Line className={`top-3 duration-300 ${isOpen && 'rotate-45 -translate-y-2'}`} />
    </button>
  )
}

export default Hamburger