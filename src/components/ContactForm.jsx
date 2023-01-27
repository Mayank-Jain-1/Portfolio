import React from 'react'
import ContactFormField from './ContactFormInput'
import ContactFormTextArea from './ContactFormTextArea'

const ContactForm = ({className}) => {
  return (
    <div className={`${className}`}>
      <ContactFormField placeHolder='Name' className='w-[96%] sm:w-[47.2%] mr-[1.6%]'/>
      <ContactFormField placeHolder='Email' className='w-[96%] sm:w-[47.2%]'/>
      <ContactFormField placeHolder='Subject' className='w-[96%]'/>
      <ContactFormTextArea placeHolder='Message' 
      className='w-[96%] break-words'/>

    </div>
  )
}

export default ContactForm