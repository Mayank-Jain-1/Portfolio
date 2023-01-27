import React from "react";
import { useState } from "react";

const ContactFormField = ({type, placeHolder, className }) => {
  return (
    <div
      className={`${className} h-[50px]  mb-[1.6%] relative
    `}
    >
      <input
        type={type}
        className={` bg-lighter text-lightest w-full h-full px-5 peer placeholder:text-lightest focus:outline-none relative group
    
    `}
        placeholder={placeHolder}
      />
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-brandGreen z-10 peer-focus:w-full duration-300 peer-invalid:bg-red-700 peer-invalid:w-full" />
    </div>
  );
};

export default ContactFormField;
