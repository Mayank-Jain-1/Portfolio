import React from 'react'

const Navlink = ({name,linkTo,className}) => {
  return (
    <li className={"border-b border-neutral-800 w-full text-center py-2 " + className}><a href={linkTo}>{name}</a></li>
  )
}

export default Navlink