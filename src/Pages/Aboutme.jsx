import React from "react";
import BaseText from "../components/BaseText";
import Codefont from "../components/Codefont";
import TagcloudDiv from "../components/TagcloudDiv";
import { arrayToCrash } from "../functions/crashTextFuncs";
import ScrollIndicators from "../components/ScrollIndicators";
import BigbgText from "../components/BigbgText";

const AboutMe = () => {
  const mainText = ["Me, Myself and I"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);

  return (
    <section
      id="aboutMe"
      className="w-full lg:h-screen py-16 px-1 sm:px-3 md:px-6 lg:px-8 relative flex flex-col justify-center"
    >
      {/* <Codefont text="section" className="absolute top-6 tab-0" /> */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-6/12">
          <Codefont text="h2" className="tab-1" />
          <div className="tab-2">{crashText}</div>
          <Codefont text="/h2" className="tab-1" />

          <Codefont text="p" className="tab-1" />

          <BaseText className="tab-3">
            A young 19yo web developer from Ludhiana, Punjab trying to make some
            money. Currently enrolled in B.Tech in Computer Science Degree from{" "}
            <span>
              <a
                className="text-brandGreen hover:text-emerald-400"
                href="https://vitbhopal.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                VIT Bhopal
              </a>
            </span>{" "}
            University
            <br />
            <br />
            I have been learning web development from October 2022 and after 4
            months i can't get enough of this. I learnt ReactJS from open source
            learning as well as from other paid sources.
            <br />
            <br />
            Other than career related skills i love to play video games, Chess,
            Badminton, Table Tennis. I love music and play Guitar. I wouldn't
            say that i am very creative but i am good at finding solutions
            pretty quick.
          </BaseText>
          <Codefont text="/p" className="tab-1" />
        </div>

        <TagcloudDiv
          className="w-10/12 lg:w-6/12 "
          textStyle="font-semibold text-brandGreen text-base sm:text-2xl md:text-3xl"
        />
      </div>
      <BigbgText
        text="About"
        className="absolute bottom-0 leading-none left-0 md:left-auto md:right-[12%]"
      />
      <ScrollIndicators />
    </section>
  );
};

export default AboutMe;
