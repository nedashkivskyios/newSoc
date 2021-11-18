import React, {FC} from 'react';
import styles from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {StoreStateType} from "../../../store/store";
import {MessagesContainer} from "./Messages/MessagesContainer";

type PropsType = {
  store: StoreStateType
}


export const Dialogs: FC<PropsType> = ({store}) => {
  return (
    <div className={styles.dialogs}>
      <DialogItems dialogItemsData={store.getState().messages.dialogItemsData}/>
      <MessagesContainer store={store}/>
    </div>
  );
};
