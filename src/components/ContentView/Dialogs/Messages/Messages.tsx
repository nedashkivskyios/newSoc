import React, {FC} from 'react';
import styles from "./Messages.module.css";
import {Message} from "./Message/Message";
import {MessagesInput} from "./MessagesInput/MessagesInput";
import {MessagesDataType} from "../../../../store/messagesReducer/messagesReducer";
import {AllActionsType} from "../../../../store/store";

type PropsType = {
  messagesData: MessagesDataType
  newMessageText: string
  dispatch: (action: AllActionsType) => void
}

export const Messages: FC<PropsType> = ({messagesData, newMessageText, dispatch}) => {
  return (
    <div className={styles.messages}>
      {messagesData.map((m, i) => <Message key={`${m.id}-${i}`} message={m.message}/>)}
      <MessagesInput newMessageText={newMessageText} dispatch={dispatch}/>
    </div>
  );
};
