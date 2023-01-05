import React, { useState } from "react";

const CrashText = ({ text, className }) => {
  
  const [animate, setanimate] = useState(false);
  const animationName = "animate-crash"
  var style = `hover:text-brandGreen duration-200 inline-block font-bold text-white text-6xl ${animate && animationName} `;

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
