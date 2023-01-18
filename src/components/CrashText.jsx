import React, { useEffect, useRef, useState } from "react";

const CrashText = ({ text, className, delay }) => {
  const ref = useRef();
  const [isCrash, setIsCrash] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false)
  const animationName = "animate-crash";

  const style = `${
    text === " " ? "ml-4 sm:ml-5 md:ml-7 lg:ml-9" : ""
  } duration-200 inline-block font-franklin font-bold tracking-tighter text-white ${
    isCrash && animationName
  } ${className}`;

  const divStyle = `inline-block ${isFadeIn ? 'animate-fadeIn': 'opacity-0'} `

  useEffect(() => {

    // if(!(rect.bottom < 0 || rect.top -viewHeight >=0)){
    const  delayedAnim = setTimeout(() => {
        setIsCrash(true);
        setIsFadeIn(true);
      }, delay * 50);

    return () => {
      clearTimeout(delayedAnim)
    }

  }, []);

  return (
    <div 
     className={divStyle}   ref = {ref}   >
      <span
        className={style}
        onAnimationEnd={() => setIsCrash(false)}
        onMouseOver={() => setIsCrash(true)}
       
      >
        {text}
      </span>
    </div>
  );
};

export default CrashText;
