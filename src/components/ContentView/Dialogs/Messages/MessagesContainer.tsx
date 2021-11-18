import React, {FC} from 'react';
import {StoreStateType} from "../../../../store/store";
import {Messages} from "./Messages";
import {addMessageAC, changeMessageTextAC} from "../../../../store/messagesReducer/messagesReducer";

type PropsType = {
  store: StoreStateType
}

export const MessagesContainer: FC<PropsType> = ({store}) => {
  let state = store.getState()
  const onChangeMessageText = (text: string) => {
    store.dispatch(changeMessageTextAC(text))
  }
  const onAddMessageButtonClick = () => {
    store.dispatch(addMessageAC())
  }
  return (
    <Messages messagesData={state.messages.messagesData}
              newMessageText={state.messages.newMessageText}
              onChangeMessageText={onChangeMessageText}
              onAddMessageButtonClick={onAddMessageButtonClick}
    />

  );
};
