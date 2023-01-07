import React from "react";
import Codefont from "../components/Codefont";
import CrashText from "../components/CrashText";

const landing = () => {
  const mainText1 = "Hi,";
  const mainText2 = "I'm    ayank    ain,";
  const mainText3 = "web developer";
  const convertToCrash = (str) => {
    var result = [];
    for (let i = 0; i < str.length; i++) {
      result.push(<CrashText text={str[i]} />);
    }
    return result;
  };
  const crash1 = convertToCrash(mainText1);
  const crash2 = convertToCrash(mainText2);
  console.log(crash2);
  const crash3 = convertToCrash(mainText3);

  return (
    <section
      className="
     px-4 lg:px-40 flex flex-col h-screen justify-center relative"
    >
      <div className="absolute top-20">
        <Codefont text="!html" />
        <Codefont text="body" className="ml-4" />
      </div>

      <div className="">
        <Codefont text="h1" className="ml-4" />
        <div className="ml-3 lg:ml-8">
          {crash1}
          <br />
          {crash2}
          <br />
          {crash3}
          <Codefont text="/h1" className={"inline-block ml-5"} />
        </div>

        <Codefont text="p" className="ml-4" />
        <p className="ml-4 lg:ml-10 text-neutral-500">Front End Devloper / React Developer</p>
        <Codefont text="/p" className="ml-4" />
      </div>
    </section>
  );
};

export default landing;
