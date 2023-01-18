import React, { useEffect } from "react";
import MouseTrailer from "./components/MouseTrailer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AboutMe from "./pages/AboutMe";
import Landing from "./pages/Landing";
import {
  updateClientHeight,
  updateWindowHeight,
  updateScroll,
} from "./actions";
import { useDispatch} from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    window.addEventListener('resize', () => {
      dispatch(updateClientHeight());
      dispatch(updateWindowHeight());
    })
    window.addEventListener("scroll", () => {
      dispatch(updateScroll());
    });

    return () => {
      window.removeEventListener("scroll", () => {
        dispatch(updateScroll());
      });
    };
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
