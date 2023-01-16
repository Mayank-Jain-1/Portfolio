import React, { useState } from "react";

const CrashText = ({ text, className }) => {

  const [animate, setanimate] = useState(false);
  const animationName = "animate-crash"
  var style = `${ text === ' ' ? 'ml-4 sm:ml-5 md:ml-7 lg:ml-9' : '' } duration-200 inline-block font-franklin font-bold tracking-tighter text-white hover:text-brandGreen ${animate && animationName} ${className}`;

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
