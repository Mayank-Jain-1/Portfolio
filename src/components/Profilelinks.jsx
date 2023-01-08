import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Profilelinks = () => {
  return (
    <ul className="flex justify-center text-neutral-500 text-2xl lg:h-52 h-14">
      <a href="Change">
        <AiFillGithub className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="Change">
        <AiFillLinkedin className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="change">
        <AiFillMail className="mx-1 hover:text-brandGreen" />
      </a>
    </ul>
  );
};

export default Profilelinks;
