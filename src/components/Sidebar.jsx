import React from "react";
import Navlinks from "./Navlinks";
import Profilelinks from "./Profilelinks";
import logo from "../media/Mjlogo.png";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.navControl);

  return (
    <div
      className={`fixed ${
        isOpen ? "opacity-100 z-30" : "opacity-0 -z-10"
      } top-0 left-0 lg:z-40 lg:opacity-100 flex flex-col justify-between bg-darker w-full lg:w-36  h-screen duration-300`}
    >
      <div  className="bg-black pt-5 lg:pt-0 flex justify-center">
      <Link 
      activeClass="text-brandGreen"
      to='landing'
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className='cursor-pointer'>
      
        <img src={logo} className="h-40 lg:h-52 object-cover" alt="" />
        </Link>

      </div>
      <Navlinks />
      <Profilelinks />

    </div>
  );
};

export default Sidebar;
