import React, { useEffect, useState } from "react";

const CrashTextImage = ({src,delay,className}) => {

  const [isRotate, setIsRotate] = useState(false)
  const [isFadeIn, setIsFadeIn] = useState(false)

  const imgStyle = `h-8 sm:h-10 md:h-16 lg:h-20 
  mr-1 ${isRotate && 'animate-rotateIn'}`
  const divStyle = `inline-block ${className} ${isFadeIn ? 'animate-fadeIn' : 'opacity-0'}`

  
  useEffect(() => {
    const delayedAnim = setTimeout(() => {
      setIsFadeIn(true)
      setIsRotate(true);
    }, delay *50);

    return () => {
      clearTimeout(delayedAnim);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className={divStyle}>
      <img
        src={src}
        alt=""
        className={imgStyle}
      />
    </div>
  );
};

export default CrashTextImage;
