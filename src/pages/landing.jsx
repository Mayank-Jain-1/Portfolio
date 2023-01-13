import React from "react";
import Codefont from "../components/Codefont";
import CrashText from "../components/CrashText";
import J from "../media/J4.png";
import M from "../media/M.png";

const landing = () => {
  console.log(J);
  const convertToCrash = (str) => {
    var result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(<CrashText text={str[i]} />);
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
  var result = [];
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
      var temp = convertToCrash(element);
      result.push(...temp);
    }
  }
  const mainText1 = "Hi,";
  const mainText2 = "I'm    ayank    ain,";
  const mainText3 = "web developer";
  const crash1 = convertToCrash(mainText1);
  const crash2 = convertToCrash(mainText2);
  // console.log(crash2);
  const crash3 = convertToCrash(mainText3);

  return (
    <section
      className="
     pl-4 lg:pl-40 flex flex-col h-screen justify-center relative"
    >
      <div className="absolute top-16 lg:top-5">
        <Codefont text="!html" />
        <Codefont text="body" className="ml-4" />
      </div>

      <div className="">
        <Codefont text="h1" className="ml-4" />

        <div className="ml-3 lg:ml-8">
          {result}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className="ml-4" />
        <p className="ml-4 lg:ml-10 text-neutral-500">
          Front End Devloper / React Developer
        </p>
        <Codefont text="/p" className="ml-4" />
      </div>
    </section>
  );
};

export default landing;
