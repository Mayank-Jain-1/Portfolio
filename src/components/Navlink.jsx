import React from "react";
import { Link } from "react-scroll";

const Navlink = ({ name, linkTo, className }) => {

  return (
    <li
      className={
        "border-b border-neutral-800 w-full text-center py-3 hover:text-brandGreen cursor-pointer " +
        className
      }
    >
      <Link 
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
