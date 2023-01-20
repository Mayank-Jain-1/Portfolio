import React, { createRef, useEffect, useState } from 'react'
import Tagcloud from './Tagcloud'


const TagcloudDiv = ({className,textStyle}) => {
  
  var divRef = createRef();
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(divRef.current.clientWidth)
    window.addEventListener('resize',updateWindowWidth)
    return () => {
      window.removeEventListener('resize',updateWindowWidth)
    }
  }, [windowWidth,divRef])
  

  return(
  <div ref={divRef} className={className} >
    <Tagcloud parentWidth={width} textStyle={textStyle}/>
  </div>
  )

}

export default TagcloudDiv