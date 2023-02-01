import React from "react";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="lg:flex-col w-full items-center  border-t border-neutral-800  text-neutral-500 text-xs lg:text-sm  font-normal">
      {/* <Navlink name="My Skills" linkTo="toChange"/> */}
      <Navlink name="Home" linkTo="landing"/>
      <Navlink name="Work" linkTo="portfolio"/>
      <Navlink name="About" linkTo="aboutMe"/>
      <Navlink name="Contact" linkTo="contactMe"/>
      {/* <Navlink name="Updates" linkTo="toChange"/> */}
    </ul>
  );
};

export default Navlinks;
