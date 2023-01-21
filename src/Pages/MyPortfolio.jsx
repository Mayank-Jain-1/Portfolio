import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import Fillbtn from "../components/FillBtn";
import { arrayToCrash } from "../functions/crashTextFuncs";

const MyPortfolio = () => {
  const mainText = ["My Portfolio"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section className="w-screen lg:h-screen lg:pl-36 lg:pr-7 py-16 relative flex flex-col justify-center">
      <Codefont text="h2" className="tab-1" />
      <div className="tab-2">{crashText}</div>
      <Codefont text="/h2" className="tab-1" />
      <Codefont text="p" className="tab-1" />
      <div className="tab-2 flex flex-col lg:flex-row lg:items-end ">
      <BaseText className="">
        These are the projects i have been working on in this small period of
        time. Most of the porjects are from web development section. But few
        also comes from gaming and machine learning. Have also worked in teams with amazing friends to help create few of them.
        <br />
        <br />
        Interested in adding your project in this wall?{" "}
        <span>
          <a className="text-brandGreen hover:text-emerald-400" href="toChange">
            Contact me
          </a>
        </span>{" "}
        for work.
      </BaseText>
      <Fillbtn text='See More!' className='w-96'/>
      </div>
      <Codefont text="/p" className="tab-1" />
    </section>
  );
};

export default MyPortfolio;
