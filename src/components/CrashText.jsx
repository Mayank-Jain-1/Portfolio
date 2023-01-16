import React, { useEffect, useState } from "react";

const CrashText = ({ text, className, delay }) => {
  const [isCrash, setIsCrash] = useState(false);
  const animationName = "animate-crash";
  var style = `${
    text === " " ? "ml-4 sm:ml-5 md:ml-7 lg:ml-9" : ""
  } duration-200 inline-block font-franklin font-bold tracking-tighter text-white ${
    isCrash && animationName
  } ${className}`;

  useEffect(() => {
    const delayedAnim = setTimeout(() => {
      setIsCrash(true);
    }, delay * 75);

    // setIsCrash(false)
  }, []);

  return (
    <div className="inline-block ">
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
