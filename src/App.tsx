import React, {FC} from 'react';
import './App.css';
import NavbarView from "./components/NavbarView/NavbarView";
import {ContentView} from "./components/ContentView/ContentView";
import {StoreStateType} from "./store/store";

type AppPropsType = {
  store: StoreStateType
}

const App: FC<AppPropsType> = ({store}) => {


  return (
    <div className="app-wrapper">
      <NavbarView/>
      <ContentView store={store}/>
    </div>
  );
}

export default App;
