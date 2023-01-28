import React from "react";

const Fillbtn = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block mt-5  ${className} relative border flex justify-center items-center border-brandGreen px-6 sm:px-16 h-10 sm:h-12 font-mono text-brandGreen text-xs sm:text-base tracking-widest overflow-hidden
    after:absolute after:bottom-0 after:right-0
    after:w-2 after:h-2 after:bg-brandGreen
    before:absolute before:-z-10 before:top-0 before:-left-2 before:w-0 before:h-full before:bg-brandGreen before:-skew-x-12
    hover:text-black hover:before:w-[110%] before:duration-300 `}
    >
      {text}
    </button>
  );
};

export default Fillbtn;
