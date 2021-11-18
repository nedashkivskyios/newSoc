import React from 'react';
import './App.css';
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";

const App = () => {
  return (
    <div className="app-wrapper">
      <NavbarView/>
      <ContentView/>
    </div>
  );
}

export default App;
