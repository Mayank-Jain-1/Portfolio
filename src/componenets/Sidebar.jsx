import React from 'react'
import Navlinks from './Navlinks'
import Profilelinks from './Profilelinks'
import logo from '../media/Mjlogo.png'

const Sidebar = () => {
  return (
    <div className='flex lg:flex-col justify-between bg-darker w-full lg:w-36 lg:h-screen'>
      <img src={logo} className='w-full h-52 object-cover' />
      <Navlinks/>
      <Profilelinks />
    </div>
  )
}

export default Sidebar