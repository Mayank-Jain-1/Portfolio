import React, { useEffect } from "react";
import Codefont from "../components/Codefont";
import FillBtn from "../components/FillBtn";
import Scrolldown from "../components/Scrolldown";
import J from "../media/J4.png";
import M from "../media/M.png";
import { arrayToCrash } from "../functions/crashTextFuncs";

const Landing = () => {
  const mainText = [
    "Hi,",
    "<br/>",
    "I'm ",
    M,
    "ayank ",
    J,
    "ain,",
    "<br/>",
    "web developer",
  ];
  const crashTextClassName =
    "text-3xl sm:text-5xl md:text-6xl lg:text-8xl hover:text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextClassName);
  console.log(crashText);

  return (
    <section
      className="
     lg:pl-36 flex flex-col h-screen justify-center  relative"
    >
      <div className="absolute top-16 lg:top-5">
        <Codefont text="!html" className="tab-0" />
        <Codefont text="body" className="tab-1" />
      </div>

      <div>
        <Codefont text="h1" className="tab-1" />
        <div className="tab-2">
          {crashText}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className="tab-1" />
        <p className="text-neutral-500 font-mono text-xs sm:text-base md:text-lg tab-2">
          Front End Developer / React Developer
        </p>
        <Codefont text="/p" className="tab-1" />
        <FillBtn text={"Contact Me!"} className="tab-2" />
      </div>

      <div>
        <Scrolldown className="absolute bottom-5 ml-1 lg:ml-2" />
        <Scrolldown
          className="absolute bottom-5
      right-0 sm:right-1 lg:right-2"
        />
      </div>
    </section>
  );
};

export default Landing;
