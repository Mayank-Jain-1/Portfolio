import React from 'react'
import Scrolldown from './Scrolldown'
const ScrollIndicators = ({className}) => {

  return (
    <div className={className}>
        <Scrolldown className="absolute bottom-5 left-1 sm:left-3" />
        <Scrolldown
          className="absolute bottom-5
      right-0 sm:right-2"
        />
    </div>
  )
}

export default ScrollIndicators