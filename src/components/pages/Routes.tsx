import React from 'react';
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
}

export const Routes = () => {
  return (
    <div className={'contentView'}>
      <Route path={NAVIGATION_PATH.profile} render={() => <Profile/>}/>
      <Route path={NAVIGATION_PATH.dialogs} render={() => <Dialogs/>}/>
    </div>
  );
};
