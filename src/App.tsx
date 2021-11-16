import React, {FC} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {ActionTypes, StateType} from "./state/state";
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";

type AppPropsType = {
  state: StateType
  dispatch: (action: ActionTypes) => void
}

const App: FC<AppPropsType> = ({state, dispatch}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <NavbarView/>
        <ContentView state={state} dispatch={dispatch}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
