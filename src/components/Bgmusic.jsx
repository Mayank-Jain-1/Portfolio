import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import relaxed from '../media/relaxed.mp3'


const Bgmusic = () => {
  const isMusic = useSelector((state) => state.musicControl);
  const [bgMusic] = useState(new Audio(relaxed))
  bgMusic.loop = true
  bgMusic.volume = 0.05
  bgMusic.playbackRate = 0.95
  bgMusic.play()


  useEffect(() => {
    isMusic ? bgMusic.play() : bgMusic.pause()
  })
  
  useEffect(() => {
    isMusic ? bgMusic.play() : bgMusic.pause()
  }, [isMusic])
  return(
    <>
    </>
  )

}

export default Bgmusic