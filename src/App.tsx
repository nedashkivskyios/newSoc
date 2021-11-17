import React, {FC} from 'react';
import './App.css';
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";
import {AllActionsType, AppStateType} from "./store/store";

type AppPropsType = {
  state: AppStateType
  dispatch: (action: AllActionsType) => void
}

const App: FC<AppPropsType> = ({state, dispatch}) => {
  return (
      <div className="app-wrapper">
        <NavbarView/>
        <ContentView state={state} dispatch={dispatch}/>
      </div>
  );
}

export default App;
