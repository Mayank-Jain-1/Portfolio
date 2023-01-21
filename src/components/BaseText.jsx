import React from 'react'

const BaseText = ({className,children}) => {

  const style = `text-white text-base pr-3 sm:px-3 md:px-6 ${className} `

  return (
    <p className={style}>
      {children}
    </p>
  )
}

export default BaseText