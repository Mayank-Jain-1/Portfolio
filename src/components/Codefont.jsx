import React from 'react'

const Codefont = ({text,className}) => {
  return (
    <div className={`text-neutral-600 font-semibold italic font-mark tracking-[0.13em] :text-lg ${className}`}>&lt;{text}&gt;</div>
  )
}

export default Codefont