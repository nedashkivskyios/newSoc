import React, {FC} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./state/state";
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";

type AppPropsType = {
  state: StateType
  changePostText: (text: string) => void
  addPost: () => void
}

const App: FC<AppPropsType> = ({state, changePostText, addPost}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavbarView/>
        <ContentView state={state} addPost={addPost} changePostText={changePostText}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
