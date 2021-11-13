import React, {FC} from 'react';
import {Profile} from "./Profile/Profile";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StateType} from "../../state/state";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
}

type PropsType = {
  state: StateType
  changePostText: (text: string) => void
}

export const Routes: FC<PropsType> = ({state, changePostText}) => {
  return (
    <div className={'contentView'}>
      <Route path={NAVIGATION_PATH.profile} render={() => <Profile changePostText={changePostText} profilePage={state.profilePage}/>}/>
      <Route path={NAVIGATION_PATH.dialogs} render={() => <Dialogs messagesPage={state.messagesPage}/>}/>
    </div>
  );
};
