import React from 'react'

const ContactFormTextArea = ({placeHolder,className}) => {
  return (
    <div
      className={`${className} h-[150px]  mb-[1.6%] relative 
    `}
    >
      <textarea
        type='text'
        className={` bg-lighter text-lightest w-full h-full px-5 py-3 peer  placeholder:text-lightest focus:outline-none relative group
    
    `}
        placeholder={placeHolder}
      />
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brandGreen z-10 peer-focus:w-full duration-300 peer-invalid:bg-red-700 peer-invalid:w-full" />
    </div>
  )
}

export default ContactFormTextArea