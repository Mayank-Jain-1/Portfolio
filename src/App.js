import React, { useEffect } from "react";
import MouseTrailer from "./components/MouseTrailer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AboutMe from "./Pages/Aboutme.jsx";
import Landing from "./Pages/Landing.jsx";
import { updateSize, updateScroll } from "./actions";
import { useDispatch } from "react-redux";
import MyPortfolio from "./Pages/MyPortfolio";
import ContactMe from "./Pages/ContactMe";
import Notifications from "./components/Notifications";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(updateSize());
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => {
      dispatch(updateScroll());
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {
        dispatch(updateScroll());
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <MouseTrailer /> 
    <Sidebar />
    <Topbar />
    <Notifications />
    <div className="lg:pl-36 overflow-x-hidden">
          <Landing />
          <MyPortfolio />
          <AboutMe />
          <ContactMe />
    </div>
    </>
  );
};

export default App;
