import React, {FC} from 'react';
import './App.css';
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
        <ContentView state={state} changePostText={changePostText}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
