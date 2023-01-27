import React from 'react'
import { useState } from 'react'

const ContactFormField = ({placeHolder,className}) => {
  
  

  return (
    <input type="text" className={`${className} bg-lighter text-lightest  h-[50px] px-5  mb-[1.6%]  placeholder:text-lightest focus:outline-none `} placeholder={placeHolder}/>
  )
}

export default ContactFormField