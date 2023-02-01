import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Profilelinks = () => {
  return (
    <ul className="flex justify-center text-neutral-500 text-xl  lg:h-44 h-14">
      <a href="https://github.com/mayank-jain-1" target="_blank" rel="noreferrer">
        <AiFillGithub className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="https://www.linkedin.com/in/mayankjain121/" target="_blank" rel="noreferrer">
        <AiFillLinkedin className="mx-1 hover:text-brandGreen" />
      </a>
      <a href="mailto:mayankjainx404@gmail.com">
        <AiFillMail className="mx-1 hover:text-brandGreen" />
      </a>
    </ul>
  );
};

export default Profilelinks;
