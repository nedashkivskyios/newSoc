import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Routes} from "./components/pages/Routes";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className={'mainView'}>
          <Navbar/>
          <Routes/>

        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
