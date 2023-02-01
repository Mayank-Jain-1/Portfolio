import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
import { addNotif } from "../actions";
import BaseText from "../components/BaseText";
import BigbgText from "../components/BigbgText";
import Codefont from "../components/Codefont";
import Fillbtn from "../components/FillBtn";
import Imgwall from "../components/Imgwall";
import { arrayToCrash } from "../functions/crashTextFuncs";

const MyPortfolio = () => {
  const mainText = ["My Portfolio"];
  const crashTextStyle =
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl  text-brandGreen";
  const crashText = arrayToCrash(mainText, crashTextStyle);
  const dispatch = useDispatch()
  const sendNotif = () => {
    dispatch(addNotif(["This is all for now but,","Surely there will be more!"],"text-white bg-black w-64 mr-8"))
  }
  return (
    <section id="portfolio">
      <div className="w-full pt-24 pb-8 px-1 sm:px-3 md:px-6 lg:px-8 relative">
        <Codefont text="h2" className="tab-1" />
        <div className="tab-2">{crashText}</div>
        <Codefont text="/h2" className="tab-1" />
        <div className="flex flex-col lg:flex-row lg:items-end justify-between">
          <div>
            <Codefont text="p" className="tab-1" />
            <BaseText className="tab-3 max-w-[800px] ">
              These are the projects i have been working / have worked on. Most of the porjects are from web development section, but few also comes from gaming and machine learning. Have also
              worked in teams with amazing friends to help create few of them.
              <br />
              <br />
              Interested in adding your project in this wall?{" "}
              <span>
                <Link
                  className="text-brandGreen hover:text-emerald-400"
                  to="contactMe"
                  smooth={true}
                  duration={500}
                >
                  Contact me
                </Link>
              </span>{" "}
              for work.
              <br />
              Code for each is available on my github
            </BaseText>
            <Codefont text="/p" className="tab-1" />
          </div>

          <Fillbtn
            onClick={sendNotif}
            text="See More!"
            className=" w-44 sm:w-56 ml-7 sm:ml-14 lg:mb-6 whitespace-nowrap"
          />
        </div>
      </div>

      <div>
        <Codefont text={"section"} className="tab-1" />
        <div className="relative">
          <BigbgText
            text="Work"
            className="absolute  sm:top-20 md:top-28 lg:top-44 left-1/3 -translate-y-full "
          />
          <Imgwall />
        </div>
        <Codefont text={"/section"} className="tab-1" />
      </div>
    </section>
  );
};

export default MyPortfolio;
