import React from 'react'
import MusicBtn from './MusicBtn'
import Hamburger from './Hamburger'

const Topbar = () => {
  return (
    <div className='fixed left-0 top-0 flex z-40 lg:z-30 lg:justify-end justify-between w-full lg:px-5 p-2 sm:p-4  '>
      <MusicBtn/>
      <Hamburger className='lg:hidden'/>
    </div>
  )
}

export default Topbar