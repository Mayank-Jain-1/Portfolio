import React from "react";

const ImgwallImage = ({className, src}) => {

  const defaultSrc = ''
  return (
    <div className={`${className} group
    w-1/3 md:w-1/5
    flex items-center justify-center
    relative`}>
      <div className="h-full w-full bg-black bg-opacity-30 absolute hover:opacity-0 duration-300" />
      <img src={src || defaultSrc} alt="" className="aspect-square" />
      <a href="toChange" className="absolute top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2
      w-2/6 h-2/6 bg-brandGreen rounded-full border-none font-mono flex items-center justify-center text-center uppercase tracking-widest text-[6px] sm:text-[8px] md:text-[7px] lg:text-[10px]
      scale-50 duration-200 opacity-0
      group-hover:scale-100 group-hover:opacity-100
      ">
        View<br />Project
      </a>
    </div>
  );
};

export default ImgwallImage;
