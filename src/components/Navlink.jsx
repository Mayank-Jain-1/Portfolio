import React from "react";
import { Link } from "react-scroll";

const Navlink = ({ name, linkTo, className }) => {

  return (
    <li
      className={
        "border-b border-neutral-800 w-full text-center hover:text-brandGreen cursor-pointer " +
        className
      }
    >
      <Link 
      className={`flex items-center justify-center w-full h-full py-3`}
      activeClass="text-brandGreen"
      to={linkTo}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}>{name}</Link>
    </li>
  );
};

export default Navlink;
