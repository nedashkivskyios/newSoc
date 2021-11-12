import React, {FC} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Routes} from "./components/pages/Routes";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./state/state";

type AppPropsType = {
  state: StateType
  changePostText: (text: string) => void
}

const App: FC<AppPropsType> = ({state, changePostText}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className={'mainView'}>
          <Navbar/>
          <Routes changePostText={changePostText} state={state}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
