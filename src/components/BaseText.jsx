import React from 'react'

const BaseText = ({className,children}) => {

  const style = `text-white text-base px-3 md:px-5 ${className} `

  return (
    <p className={style}>
      {children}
    </p>
  )
}

export default BaseText