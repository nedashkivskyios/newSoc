import React, {FC} from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import styles from './ContentView.module.css'
import {AllActionsType, AppStateType} from "../../store/store";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
}

type PropsType = {
  state: AppStateType
  dispatch: (action: AllActionsType) => void
}

export const Routes: FC<PropsType> = ({state,dispatch}) => {
  return (
    <div className={styles.contentViewMain}>
      <Route path={NAVIGATION_PATH.profile} element={<Profile profilePage={state.profile} dispatch={dispatch}/>}/>
      <Route path={NAVIGATION_PATH.dialogs} element={<Dialogs messagesPage={state.messages} dispatch={dispatch}/>}/>
    </div>
  );
};
