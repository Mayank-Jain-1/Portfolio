import React from "react";
import LoadingBar from "../components/LoadingBar";
import { arrayToCrash } from "../functions/crashTextFuncs";

const Loading = ({className}) => {
  const mainText = ["Welcome", "<br/>"];
  const crashTextStyle =
    "text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-brandGreen ";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <div className={`${className} h-screen w-screen flex justify-center items-center fixed z-50 bg-dark flex-col left-0 top-0`}>
      <div className="">{crashText}</div>
      <p className="text-lightest">Let's take a trip around my Portfolio</p>
      <LoadingBar className="my-2"/>
    </div>
  );
};

export default Loading;
