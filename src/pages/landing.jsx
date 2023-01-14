import React from "react";
import Codefont from "../components/Codefont";
import FillBtn from "../components/FillBtn";
import CrashText from "../components/CrashText";
import Scrolldown from "../components/Scrolldown";
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
    let result = [];
    for (let i = 0; i < mainText.length; i++) {
      const element = mainText[i];
      if (element === "<br/>") {
        result.push(<br />);
      } else if (element.includes("png")) {
        result.push(
          <div className="inline-block">
            <img
              src={element}
              alt=""
              className=" h-7 sm:h-10 md:h-14 lg:h-20 
            mr-1"
            />
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
  const tab0 = " ml-2 sm:ml-4 lg:ml-8";
  const tab1 = " ml-3 sm:ml-7 lg:ml-12";
  const tab2 = " ml-5 sm:ml-10 lg:ml-16 ";

  return (
    <section
      className="
     lg:pl-36 flex flex-col h-screen justify-center relative"
    >
      <div className="absolute top-16 lg:top-5">
        <Codefont text="!html" className={tab0} />
        <Codefont text="body" className={tab1} />
      </div>

      <div>

        <Codefont text="h1" className={tab1} />
        <div className={tab2}>
          {crashText}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className={tab1} />
        <p
          className={` text-neutral-500 font-mono text-xs sm:text-base md:text-lg ${tab2}`}
        >
          Front End Developer / React Developer
        </p>
        <Codefont text="/p" className={tab1} />
        <FillBtn text={'Contact Me!'} className={tab2} />
      </div>

      {/* <div className="absolute bottom-5">
        <Codefont text="/body" className={tab1} />
      </div> */}
      <div>
      <Scrolldown className='absolute bottom-5 ml-1 lg:ml-2'/>
      <Scrolldown className='absolute bottom-5
      right-0 sm:right-1 lg:right-2'/>
      </div>
    </section>
  );
};

export default landing;
