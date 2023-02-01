import React from 'react'

const BigbgText = ({text,className}) => {

  return (

    <div className={`${className} lg:text-[29rem] md:text-[18rem] sm:text-[10rem]  text-neutral-800  font-bold -z-20`}>{text}</div>
  )
}

export default BigbgText