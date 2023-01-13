import React from "react";
import Codefont from "../components/Codefont";
import ContactMe from "../components/ContactMe";
import CrashText from "../components/CrashText";
import J from "../media/J4.png";
import M from "../media/M.png";

const landing = () => {
  const textToCrash = (str) => {
    var result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(<CrashText text={str[i]} />);
    }
    return result;
  };
  const arrayToCrash = (array) => {
    let result = []
    for (let i = 0; i < mainText.length; i++) {
      const element = mainText[i];
      if (element === "<br/>") {
        result.push(<br />);
      } else if (element.includes("png")) {
        result.push(
          <div className="inline-block">
            <img src={element} alt="" className=" h-7 sm:h-10 md:h-16 lg:h-20
            mr-1" />
          </div>
        );
      } else {
        var temp = textToCrash(element);
        result.push(...temp);
      }
    }
    return result;
  };
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
  const crashText = arrayToCrash(mainText);
  const tab0 = " -ml-1 sm:ml-0 "
  const tab1 = " ml-2 sm:ml-3 "
  const tab2 = " ml-6 sm:ml-7 lg:ml-6 "


  return (
    <section
      className="
     pl-4 lg:pl-40 flex flex-col h-screen justify-center relative"
    >
      <div className="absolute top-16 lg:top-5">
        <Codefont text="!html" className={tab0}/>
        <Codefont text="body" className={tab1} />
      </div>

      <div>
        <Codefont text="h1" className={tab1} />

        <div className={tab2}>
          {crashText}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className={tab1} />
        <p className={"ml-4 lg:ml-10 text-neutral-500 font-mono text-xs sm:text-base md:text-lg " + tab2}>
          Front End Devloper / React Developer
        </p>
        <Codefont text="/p" className={tab1} />
        <ContactMe className={tab2}/>
        
      </div>
    </section>
  );
};

export default landing;
