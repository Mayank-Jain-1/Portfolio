import React from 'react'

const Navlink = ({name,linkTo,className}) => {
  return (
    <li className={`border-b border-dark w-full text-center ${className}`}><a href={linkTo}>{name}</a></li>
  )
}

export default Navlink