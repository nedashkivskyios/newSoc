import React, {FC} from 'react';
import styles from "./Messages.module.css";
import {Message} from "./Message/Message";
import {MessagesDataType} from "../../../state/state";

type PropsType = {
  messagesData: MessagesDataType
}

export const Messages: FC<PropsType> = ({messagesData}) => {
  return (
    <div className={styles.messages}>
      {messagesData.map((m, i) => <Message key={`${m.id}-${i}`} message={m.message}/>)}
    </div>
  );
};
