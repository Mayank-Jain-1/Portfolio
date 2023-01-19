import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import { arrayToCrash } from "../functions/crashTextFuncs";

const AboutMe = () => {
  const mainText = ["Me, Myself and I"];
  const crashTextStyle =
    "text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-brandGreen ";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section className="h-screen w-screen lg:pl-36 lg:pr-7 py-16 relative flex flex-col justify-center">
      <Codefont text="section" className="absolute top-6 tab-0" />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-4/6">
          <Codefont text="h2" className="tab-1" />
          <div className="tab-2">{crashText}</div>
          <Codefont text="/h2" className="tab-1" />

          <Codefont text="p" className="tab-1" />

          <BaseText className="tab-2">
            A young 19yo web developer from Ludhiana, Punjab trying to make some
            money. Currently enrolled in B.Tech in Computer Science Degree from{' '}
            <span>
              <a
                className="text-brandGreen hover:text-emerald-400"
                href="toChange"
              >
                VIT Bhopal
              </a>
            </span>
            {' '}University
            <br />
            <br />
            I have been learning web development from October 2022 and after 4
            months i can't get enough of this. I learnt ReactJS from open source
            learning as well as from other paid sources.
            <br />
            <br />
            Other than career related skills i love to play video games,
            Badminton, Table Tennis. I love music and play Guitar.
          </BaseText>
          <Codefont text="/p" className="tab-1" />
        </div>
        <div className="bg-slate-500 w-1/2 ">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
