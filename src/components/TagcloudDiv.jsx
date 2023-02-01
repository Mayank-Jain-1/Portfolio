import React, { createRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Tagcloud from './Tagcloud'


const TagcloudDiv = ({className,textStyle}) => {
  
  var divRef = createRef();
  const viewWidth = useSelector(store => store.documentInfo.viewWidth)
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(divRef.current.clientWidth)
  }, [viewWidth,divRef])
  

  return(
  <div ref={divRef} className={className} >
    <Tagcloud parentWidth={width} textStyle={textStyle}/>
  </div>
  )

}

export default TagcloudDiv