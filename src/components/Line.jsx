import React from "react";

const Line = ({ width, color, className }) => {
  const style =`relative bg-${color} h-0 border border-${color} w-5 ${className}`;

  return (
    <div className={style}></div>
  );
};

Line.defaultProps = {
  width: '12',
  color: "white",
  className: "",
};

export default Line;
