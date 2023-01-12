import React, { useState } from "react";

const CrashText = ({ text, className }) => {

  const [animate, setanimate] = useState(false);
  const animationName = "animate-crash"
  var style = `${text == ' ' && 'ml-2'} duration-200 inline-block font-franklin font-bold text-white text-xl ${animate && animationName} hover:text-brandGreen`;

  return (
    <span
      className={style}
      onAnimationEnd={() => setanimate(false)}
      onMouseOver={() => setanimate(true)}
    >
      {text}
    </span>
  );
};

export default CrashText;
