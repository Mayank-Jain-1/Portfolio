import React from 'react'
import Navlinks from './Navlinks'
import Profilelinks from './Profilelinks'
import logo from '../media/Mjlogo.png'

const Sidebar = () => {
  return (
    <div className='hidden lg:flex flex-col justify-between bg-darker w-full lg:w-36 h-screen'>
      <div className='bg-black'>

      <img src={logo} className='h-52 object-cover m-auto' alt=''/>
      </div>
      <Navlinks/>
      <Profilelinks />
    </div>
  )
}

export default Sidebar