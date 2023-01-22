import React from 'react'

const BaseText = ({className,children}) => {

  const style = `text-white text-base ${className} `

  return (
    <p className={style}>
      {children}
    </p>
  )
}

export default BaseText