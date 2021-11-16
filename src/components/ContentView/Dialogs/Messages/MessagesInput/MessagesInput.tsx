import React, {ChangeEvent, FC} from "react";
import styles from './MessagesInput.module.css'
import {ActionTypes, addMessageAC, changeMessageTextAC} from "../../../../../state/state";

type PropsType = {
  newMessageText: string
  dispatch: (action: ActionTypes) => void
}



export const MessagesInput: FC<PropsType> = ({newMessageText, dispatch}) => {

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMessageTextAC(e.currentTarget.value))
  }
  const onAddMessageButtonClickHandler = () => {
    dispatch(addMessageAC())
  }

  return (
    <div className={styles.messagesInput}>
      <input type="text" value={newMessageText} onChange={onChangeMessageTextHandler}/>
      <button onClick={onAddMessageButtonClickHandler}>+</button>
    </div>
  )
}