import React from "react";
import Codefont from "../components/Codefont";
import FillBtn from "../components/FillBtn";
import J from "../media/J4.png";
import M from "../media/M.png";
import { arrayToCrash } from "../functions/crashTextFuncs";
import ScrollIndicators from "../components/ScrollIndicators";

const Landing = () => {
  const mainText = [
    "Hi, ",
    "<br/>",
    "I'm ",
    M,
    "ayank ",
    J,
    "ain,",
    "<br/>",
    "web developer",
  ];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-7xl lg:text-8xl hover:text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section
      className="py-16 px-1 sm:px-3 md:px-6 lg:px-8 relative
     flex flex-col h-screen text-white justify-center"
    >
      <div className="absolute top-16 lg:top-5">
        <Codefont text="!html" className="tab-0" />
        <Codefont text="body" className="tab-1" />
      </div>

      <div >
        <Codefont text="h1" className="tab-1" />
        <div className="ml-6 sm:ml-11 md:ml-8 lg:ml-12">
          {crashText}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className="tab-1" />
        <p className="text-neutral-500 font-mono text-xs sm:text-base md:text-lg tab-3">
          Front End Developer / React Developer
        </p>
        <Codefont text="/p" className="tab-1" />
        <FillBtn text={"Contact Me!"} className="tab-3" />
      </div>

      <ScrollIndicators/>
    </section>
  );
};

export default Landing;
