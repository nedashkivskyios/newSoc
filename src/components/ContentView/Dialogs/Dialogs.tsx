import React, {FC} from 'react';
import styles from './Dialogs.module.css'
import {DialogItems} from "./DialogItems/DialogItems";
import {Messages} from "./Messages/Messages";
import {MessagesPageType} from "../../../store/messagesReducer/messagesReducer";
import {AllActionsType} from "../../../store/store";

type PropsType = {
  messagesPage: MessagesPageType
  dispatch: (action: AllActionsType) => void
}


export const Dialogs: FC<PropsType> = ({messagesPage,dispatch}) => {
  return (
    <div className={styles.dialogs}>
      <DialogItems dialogItemsData={messagesPage.dialogItemsData}/>
      <Messages messagesData={messagesPage.messagesData}
                newMessageText={messagesPage.newMessageText}
                dispatch={dispatch}

      />
    </div>
  );
};
