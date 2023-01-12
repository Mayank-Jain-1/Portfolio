import React from "react";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="lg:flex-col w-full items-center  border-t border-neutral-800 text-neutral-500 text-xs lg:text-base font-semibold">
      <Navlink name="About" linkTo="tochange"/>
      <Navlink name="My Skills" linkTo="tochange"/>
      <Navlink name="Work" linkTo="tochange"/>
      <Navlink name="Contact" linkTo="tochange"/>
      <Navlink name="Updates" linkTo="tochange"/>
    </ul>
  );
};

export default Navlinks;
