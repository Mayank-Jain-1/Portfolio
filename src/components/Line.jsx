import React from "react";

const Line = ({ width, color, className }) => {
  const style =`relative bg-${color} h-0 border-2 border-${color} w-7 ${className}`;

  return (
    // <span className={style } className='border'></span>
    <div className={style}></div>
  );
};

Line.defaultProps = {
  width: '12',
  color: "white",
  className: "",
};

export default Line;
