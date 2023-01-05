import React from "react";
import Navlinks from "./Navlinks";
import Profilelinks from "./Profilelinks";
import logo from "../media/Mjlogo.png";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.navControl);

  return (
    <div
      className={`fixed ${
        isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
      }  lg:z-10 lg:opacity-100 flex flex-col justify-between bg-darker w-full lg:w-36 h-screen duration-300`}
    >
      <div className="bg-black pt-5 lg:pt-0">
        <img src={logo} className="h-52 object-cover m-auto lg:mt-0" alt="" />
      </div>
      <Navlinks />
      <Profilelinks />
    </div>
  );
};

export default Sidebar;
