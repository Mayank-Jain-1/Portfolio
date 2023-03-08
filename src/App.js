import React, { useEffect } from "react";
import MouseTrailer from "./components/MouseTrailer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AboutMe from "./Pages/Aboutme.jsx";
import Landing from "./Pages/Landing.jsx";
import { updateSize, updateScroll } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import MyPortfolio from "./Pages/MyPortfolio";
import ContactMe from "./Pages/ContactMe";
import Notifications from "./components/Notifications";
import Loading from "./Pages/Loading";

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);

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
        {loading ? (
          <Loading />
        ) : (
          <>
            <Loading className='translate-x-full duration-300'/>
            <Landing />
            <MyPortfolio />
            <AboutMe />
            <ContactMe />
          </>
        )}
      </div>
    </>
  );
};

export default App;
