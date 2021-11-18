import React, {FC} from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import styles from './ContentView.module.css'
import {StoreStateType} from "../../store/store";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
}

type PropsType = {
  store: StoreStateType
}

export const RoutesMain: FC<PropsType> = ({store}) => {
  return (
    <div className={styles.contentViewMain}>
      <Routes>
        <Route path={NAVIGATION_PATH.profile} element={<Profile store={store}/>}/>
        <Route path={NAVIGATION_PATH.dialogs} element={<Dialogs store={store}/>}/>
      </Routes>
    </div>
  );
};
