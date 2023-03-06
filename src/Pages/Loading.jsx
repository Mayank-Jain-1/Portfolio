import React from "react";
import LoadingBar from "../components/LoadingBar";
import { arrayToCrash } from "../functions/crashTextFuncs";

const Loading = () => {
  const mainText = ["Welcome", "<br/>"];
  const crashTextStyle =
    "text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-brandGreen ";
  const crashText = arrayToCrash(mainText, crashTextStyle);
  return (
    <div className="h-screen w-screen flex justify-center items-center absolute z-30 bg-dark flex-col">
      <div className="">{crashText}</div>
      <p className="text-lightest">Let's take a trip around my Portfolio</p>
      <LoadingBar className="my-2"/>
    </div>
  );
};

export default Loading;
