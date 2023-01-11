import React from "react";
import Navlink from "./Navlink";

const Navlinks = () => {
  return (
    <ul className="text-white flex flex-col items-center h-screen border-y">
      <Navlink name="About" linkTo="tochange"/>
      <Navlink name="My Skills" linkTo="tochange"/>
      <Navlink name="Work" linkTo="tochange"/>
      <Navlink name="Contact" linkTo="tochange"/>
      <Navlink name="Updates" linkTo="tochange"/>
    </ul>
  );
};

export default Navlinks;
