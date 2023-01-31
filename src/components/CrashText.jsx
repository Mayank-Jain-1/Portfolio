import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { isVisible } from "../functions/docFunctions";

// TODO CHeck the lag bug between the isvisible function


const CrashText = ({ text, className, delay }) => {
  const ref = useRef();
  const { viewHeight, scrollY } = useSelector((store) => store.documentInfo);
  const [isCrash, setIsCrash] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [startAnimationDone, setStartAnimationDone] = useState(false);
  const animationName = "animate-crash";

  const style = `${
    text === " " ? "ml-4 sm:ml-5 md:ml-7 lg:ml-9" : ""
  } duration-200 inline-block font-franklin font-bold tracking-tighter ${
    isCrash && animationName
  } ${className}`;

  const divStyle = `inline-block ${isFadeIn ? "animate-fadeIn" : "opacity-0"} `;

  
  useEffect(() => {
    if (!startAnimationDone) {
      const visible = isVisible(ref.current, viewHeight, 0);

      if (visible) {
        setStartAnimationDone(true);
        setTimeout(() => {
          setIsCrash(false);
          setIsCrash(true);
          setIsFadeIn(true);
        }, delay * 50);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return (
    <div className={divStyle} ref={ref}>
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
