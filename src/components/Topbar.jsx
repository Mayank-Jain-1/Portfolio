import React from 'react'
import MusicBtn from './MusicBtn'

const Topbar = () => {
  return (
    <div className='fixed top-0 flex justify-end w-full h-12'>
      <MusicBtn/>
    </div>
  )
}

export default Topbar