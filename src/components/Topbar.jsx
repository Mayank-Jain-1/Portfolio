import React from 'react'
import MusicBtn from './MusicBtn'
import Hamburger from './Hamburger'

const Topbar = () => {
  return (
    <div className='fixed top-0 flex z-20 lg:justify-end justify-between w-full h-12 lg:px-5 py-4 pr-4'>
      <MusicBtn/>
      <Hamburger className='lg:hidden'/>
    </div>
  )
}

export default Topbar