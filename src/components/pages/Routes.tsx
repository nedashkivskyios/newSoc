import React, {FC} from 'react';
import {Profile} from "../Profile/Profile";
import {Dialogs} from "../Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {DialogItemsDataType, MessagesDataType, PostsDataType} from "../../state/state";

export enum NAVIGATION_PATH {
  profile = '/profile',
  dialogs = '/dialogs',
}

type PropsType = {
  messagesData: MessagesDataType
  dialogItemsData: DialogItemsDataType
  postsData: PostsDataType
}

export const Routes: FC<PropsType> = (props) => {
  const {
    dialogItemsData,
    messagesData,
    postsData,
  } = props
  return (
    <div className={'contentView'}>
      <Route path={NAVIGATION_PATH.profile} render={() => <Profile postsData={postsData}/>}/>
      <Route path={NAVIGATION_PATH.dialogs} render={() => <Dialogs messagesData={messagesData} dialogItemsData={dialogItemsData}/>}/>
    </div>
  );
};
