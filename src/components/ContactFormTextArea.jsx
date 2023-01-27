import React from 'react'

const ContactFormTextArea = ({placeHolder,className}) => {
  return (
    <textarea type="text" className={`${className} bg-lighter text-lightest h-[150px] px-5 py-3  mb-[1.6%] placeholder:text-lightest focus:outline-none `} placeholder={placeHolder}/>
  )
}

export default ContactFormTextArea