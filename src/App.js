import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Landing from "./pages/landing";

import React from 'react'

const App = () => {
  return (
    <>
    <Sidebar/>
    <Topbar/>
    <Landing/>
    </>
  )
}

export default App