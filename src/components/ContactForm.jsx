import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContactFormField from "./ContactFormInput";
import ContactFormTextArea from "./ContactFormTextArea";
import FillBtn from './FillBtn'

const ContactForm = ({ className }) => {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailFlag, setEmailFlag] = useState(true);
  const [messageFlag, setMessageFlag] = useState(true);
  const [formInit, setFormInit] = useState(false)
  const validateEmail = (email) => {
    const ans = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return ans;
  };
  const formValidation = () => {
    validateEmail(messageInfo.email) !== null
      ? setEmailFlag(true)
      : setEmailFlag(false);
    messageInfo.message.length > 10
      ? setMessageFlag(true)
      : setMessageFlag(false);
  }

  const handleChange = (event) => {
    setMessageInfo({
      ...messageInfo,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    formInit && formValidation();
    setFormInit(true);

  }, [messageInfo])
  
  //////////JSX BELOW ////////////

  return (
    <form className={`${className} flex flex-wrap`}>
      <ContactFormField
        name="name"
        value={messageInfo.name}
        type="text"
        placeHolder="Name"
        width="half"
        className="sm:mr-[2%] "
        handleChange={handleChange}
      />
      <ContactFormField
        name="email"
        value={messageInfo.email}
        type="email"
        placeHolder="Email"
        flag={emailFlag}
        width="half"
        handleChange={handleChange}
      />
      <ContactFormField
        name="subject"
        value={messageInfo.subject}
        type="text"
        placeHolder="Subject"
        width="full"
        handleChange={handleChange}
      />
      <ContactFormTextArea
        name="message"
        value={messageInfo.message}
        type="text"
        placeHolder="Message"
        flag={messageFlag}
        width="full"
        handleChange={handleChange}
      />
      <div className="w-full">

      <FillBtn text='Send Message' className='float-right'/>
      </div>
      
    </form>
  );
};

export default ContactForm;
