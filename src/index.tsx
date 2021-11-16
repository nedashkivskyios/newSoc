import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export const rerenderEntireTree = () => {
  ReactDOM.render(<App state={store.getState()}
                       dispatch={store.dispatch.bind(store)}
    />,
    document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);
rerenderEntireTree()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



