import React from "react";
import MouseTrailer from "./components/MouseTrailer";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import AboutMe from "./pages/AboutMe";
import Landing from "./pages/Landing";


const App = () => {
  return (
    <>

      <MouseTrailer/>
      <Sidebar />
      <Topbar />
      <Landing />
      <AboutMe/>

    </>
  );
};

export default App;
