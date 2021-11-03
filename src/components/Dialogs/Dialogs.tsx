import React, {FC} from 'react';
import styles from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {DialogItemsDataType, MessagesDataType} from "../../state/state";

type PropsType = {
  messagesData: MessagesDataType
  dialogItemsData: DialogItemsDataType
}


export const Dialogs: FC<PropsType> = ({dialogItemsData,messagesData}) => {
  return (
    <div className={styles.dialogs}>
      <DialogItems dialogItemsData={dialogItemsData}/>
      <Messages messagesData={messagesData}/>
    </div>
  );
};
