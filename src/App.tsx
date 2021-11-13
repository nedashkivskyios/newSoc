import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/NavbarView/Navbar/Navbar";
import {Routes} from "./components/ContentView/Routes";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./state/state";
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";

type AppPropsType = {
  state: StateType
  changePostText: (text: string) => void
}

const App: FC<AppPropsType> = ({state, changePostText}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavbarView/>
        <ContentView/>
      </div>
    </BrowserRouter>
  );
}

export default App;
