import React from 'react'
import ContactFormField from './ContactFormInput'
import ContactFormTextArea from './ContactFormTextArea'

const ContactForm = ({className}) => {
  return (
    <div className={`${className} flex flex-wrap`}>
      <ContactFormField type='text' placeHolder='Name' className='w-[96%] sm:w-[47.2%] mr-[1.6%]'/>
      <ContactFormField type='email' placeHolder='Email' className='w-[96%] sm:w-[47.2%]'/>
      <ContactFormField type='text' placeHolder='Subject' className='w-[96%]'/>
      <ContactFormTextArea type='text' placeHolder='Message' 
      className='w-[96%] break-words'/>

    </div>
  )
}

export default ContactForm