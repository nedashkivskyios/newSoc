import React from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import styles from './ContentView.module.css'
import {UsersContainer} from "./Users/UsersContainer";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
  users = '/users',
}


export const RoutesMain = () => {
  return (
    <div className={styles.contentViewMain}>
      <Routes>
        <Route path={NAVIGATION_PATH.profile} element={<Profile/>}/>
        <Route path={NAVIGATION_PATH.dialogs} element={<Dialogs/>}/>
        <Route path={NAVIGATION_PATH.users} element={<UsersContainer/>}/>
      </Routes>
    </div>
  );
};
