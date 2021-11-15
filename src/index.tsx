import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, changePostText, StateType, subscribe} from "./state/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export const rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(<App state={state}
                       changePostText={changePostText}
                       addPost={addPost}
    />,
    document.getElementById('root'));
}

subscribe(rerenderEntireTree);
rerenderEntireTree(state)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



