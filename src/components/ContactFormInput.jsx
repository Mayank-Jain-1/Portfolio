import React from "react";

const ContactFormField = ({type,name,value, placeHolder,flag,handleChange,width, className }) => {
  return (
    <div
      className={`${className} ${width === 'half' ? 'w-[100%] sm:w-[49%]' : 'w-full' } h-[50px]  mb-2.5 relative
    `}
    >
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => handleChange(e)}
        className={` bg-lighter text-lightest w-full h-full px-5 peer placeholder:text-lightest focus:outline-none relative group`
      }
        placeholder={placeHolder}
      />
      <span className={`${flag === false ? 'bg-red-700 w-full' : 'w-0 bg-brandGreen' } absolute left-0 bottom-0 h-0.5 z-10 peer-focus:w-full duration-300 
      peer-invalid:bg-red-700 peer-invalid:w-full
      `} />
    </div>
  );
};

export default ContactFormField;
