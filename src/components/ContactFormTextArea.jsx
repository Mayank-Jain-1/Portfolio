import React from 'react'

const ContactFormTextArea = ({type,name,value, placeHolder,flag,handleChange,width, className }) => {
  return (
    <div
      className={`${className}  ${width === 'half' ? 'w-[100%] sm:w-[49%]' : 'w-full' } h-[150px]  mb-[1.6%] relative 
    `}
    >
      <textarea
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e)}
        className={` bg-lighter text-lightest w-full h-full px-5 py-3 peer  placeholder:text-lightest focus:outline-none relative
        resize-x
    `}
        placeholder={placeHolder}
      />
      <span className={`${flag === false ? 'bg-red-700 w-full' : 'w-0 bg-brandGreen' } absolute left-0 bottom-0 h-0.5 z-10 peer-focus:w-full duration-300 peer-invalid:bg-red-700 peer-invalid:w-full`} />
    </div>
  )
}

export default ContactFormTextArea