import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import Fillbtn from "../components/FillBtn";
import Imgwall from "../components/Imgwall";
import { arrayToCrash } from "../functions/crashTextFuncs";

const MyPortfolio = () => {
  const mainText = ["My Portfolio"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section className="w-full py-16 px-1 sm:px-3 md:px-6 lg:px-8 relative">
      <Codefont text="h2" className="tab-1" />
      <div className="tab-2">{crashText}</div>
      <Codefont text="/h2" className="tab-1" />
      <div className="flex flex-col lg:flex-row lg:items-end justify-between">
        <div>
          <Codefont text="p" className="tab-1" />
          <BaseText className="tab-3 max-w-[800px] ">
            These are the projects i have been working on in this small period
            of time. Most of the porjects are from web development section. But
            few also comes from gaming and machine learning. Have also worked in
            teams with amazing friends to help create few of them.
            <br />
            <br />
            Interested in adding your project in this wall?{" "}
            <span>
              <a
                className="text-brandGreen hover:text-emerald-400"
                href="toChange"
              >
                Contact me
              </a>
            </span>{" "}
            for work.
          </BaseText>
          <Codefont text="/p" className="tab-1" />
        </div>

          <Fillbtn text="See More!" className=" w-44 sm:w-56 ml-7 sm:ml-14 lg:mb-6 whitespace-nowrap" />
      </div>
      <Imgwall/>
    </section>
  );
};

export default MyPortfolio;
