import React, { useEffect } from "react";
import MouseTrailer from "./components/MouseTrailer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AboutMe from "./Pages/AboutMe.jsx";
import Landing from "./Pages/Landing.jsx";
import {
  updateViewHeight,
  updateScroll,
} from "./actions";
import { useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    window.addEventListener('resize', () => {
      dispatch(updateViewHeight());
    });
    window.addEventListener("scroll", () => {
      dispatch(updateScroll());
    });

    return () => {
      window.removeEventListener("scroll", () => {
        dispatch(updateScroll());
      });
      window.removeEventListener('resize', () => {
        dispatch(updateViewHeight());
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MouseTrailer />
      <Sidebar />
      <Topbar />
      <Landing />
      <AboutMe />
    </>
  );
};

export default App;
