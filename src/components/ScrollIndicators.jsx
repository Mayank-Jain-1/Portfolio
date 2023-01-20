import React from 'react'
import Scrolldown from './Scrolldown'
const ScrollIndicators = ({className}) => {

  return (
    <div className={className}>
        <Scrolldown className="absolute bottom-5 ml-1 lg:ml-2" />
        <Scrolldown
          className="absolute bottom-5
      right-0 sm:right-1 lg:right-2"
        />
    </div>
  )
}

export default ScrollIndicators