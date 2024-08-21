import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Navbar';
import SideBar from './components/SideBar';
import OnlineCollabs from './components/OnlineCollabs';
import MainComp from './components/MainComp';

const App = () => {
  /*
      <OnlineCollabs /> */
  return (
    <>
      <NavBar className="nvbar"/>
      <SideBar className="sdbar"/>
      <OnlineCollabs />
    </>
  );
};
export default App;

