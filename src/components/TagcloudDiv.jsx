import React, { createRef, useEffect, useState } from 'react'
import Tagcloud from './Tagcloud'


const TagcloudDiv = ({className,textStyle}) => {
  
  var divRef = createRef();
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const updateWindowWidth = () => {
  //   clearTimeout(timeout);
  //   const timeout = setTimeout(()=> setWindowWidth(window.innerWidth),150)
  // }

  useEffect(() => {
    setWidth(divRef.current.clientWidth)
    console.log(windowWidth);
    let timeoutId = null;
    const updateWindowWidth = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(()=> setWindowWidth(window.innerWidth),150)
    }
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