import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Footer} from "./components/Footer/Footer";
import {Routes} from "./components/pages/Routes";
import {BrowserRouter} from "react-router-dom";
import {DialogItemsDataType, MessagesDataType, PostsDataType} from "./state/state";

type AppPropsType = {
  messagesData: MessagesDataType
  dialogItemsData: DialogItemsDataType
  postsData: PostsDataType
}

const App = (props: AppPropsType) => {
  const {
    messagesData,
    postsData,
    dialogItemsData,
  } = props

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className={'mainView'}>
          <Navbar/>
          <Routes messagesData={messagesData}
                  postsData={postsData}
                  dialogItemsData={dialogItemsData}
          />

        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
