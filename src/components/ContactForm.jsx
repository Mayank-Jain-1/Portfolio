import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ContactFormField from "./ContactFormInput";
import ContactFormTextArea from "./ContactFormTextArea";
import FillBtn from "./FillBtn";
import emailjs from "@emailjs/browser";
import { useDispatch } from "react-redux";
import { addNotif } from "../actions";

const ContactForm = ({ className }) => {
  const formRef = useRef();
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailFlag, setEmailFlag] = useState(true);
  const [messageFlag, setMessageFlag] = useState(true);
  const [formInit, setFormInit] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setMessageInfo({
      ...messageInfo,
      [event.target.name]: event.target.value,
    });
  };
  const validateEmail = (email) => {
    return email.match(
      //eslint-disable-next-line
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      
  };  
  const formValidation = () => {
    validateEmail(messageInfo.email) !== null
      ? setEmailFlag(true)
      : setEmailFlag(false);
    messageInfo.message.length > 10
      ? setMessageFlag(true)
      : setMessageFlag(false);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (emailFlag && messageFlag && messageInfo.name && messageInfo.name) {
      dispatch(
        addNotif(["Please wait. Processing"], "bg-black text-white w-64 mr-8")
      );
      try {
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_ID
          )
          .then(() => {
            dispatch(
              addNotif(
                ["Your e-mail has been", "successfully sent. Thank you!"],
                "bg-green-500 text-white w-64 mr-8"
              )
            );
          });
        formReset();
      } catch {
        dispatch(
          addNotif(
            ["Error while sendind e-mail", "Try again!"],
            "text-white bg-red-700 w-64"
          )
        );
      }
    } else {
      dispatch(
        addNotif(
          ["Please fill all the fields correctly"],
          "text-white bg-red-700 w-72"
        )
      );
    }
  };


  const formReset = () => {
    setFormInit(false);
    setMessageInfo({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setEmailFlag(true);
    setMessageFlag(true);
  };

  useEffect(() => {
    formInit && formValidation();
    setFormInit(true);
    //needed for sync between message change and form validation


    //eslint-disable-next-line
  }, [messageInfo]);

  return (
    <form ref={formRef} className={`${className} flex flex-wrap`}>
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
        <FillBtn
          onClick={sendEmail}
          text="Send Message"
          className="float-right"
        />
      </div>
    </form>
  );
};

export default ContactForm;
