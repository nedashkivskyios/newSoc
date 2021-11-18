import React, {FC} from 'react';
import styles from "./Messages.module.css";
import {Message} from "./Message/Message";
import {MessagesInput} from "./MessagesInput/MessagesInput";
import {MessagesDataType} from "../../../../store/messagesReducer/messagesReducer";

type PropsType = {
  messagesData: MessagesDataType
  newMessageText: string
  onAddMessageButtonClick: () => void
  onChangeMessageText: (text: string) => void
}

export const Messages: FC<PropsType> = ({
                                          messagesData,
                                          newMessageText,
                                          onChangeMessageText,
                                          onAddMessageButtonClick,
                                        }) => {
  return (
    <div className={styles.messages}>
      {messagesData.map((m, i) => <Message key={`${m.id}-${i}`} message={m.message}/>)}
      <MessagesInput newMessageText={newMessageText} onChangeMessageText={onChangeMessageText}
                     onAddMessageButtonClick={onAddMessageButtonClick}/>
    </div>
  );
};
