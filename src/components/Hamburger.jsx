import React from 'react'
import Line from './Line'
import {useSelector, useDispatch} from 'react-redux'
import {toggleNav} from "../actions/index.js";

const Hamburger = ({flag, toggleFunction,   className}) => {
  
  const isOpen = useSelector((state)=> state.navControl)
  const dispatch = useDispatch();
  console.log(isOpen);

  return (
    <button onClick={()=> dispatch(toggleNav())} className='relative flex flex-col items-center bg-black bg-opacity-50 w-12 h-12 p-2 rounded-md'>
      <Line className='top-1' />
      <Line className='top-3' />
      <Line className='top-5' />
    </button>
  )
}

export default Hamburger