import React, {ChangeEvent, FC} from "react";
import styles from './MessagesInput.module.css'
import {addMessageAC, changeMessageTextAC} from "../../../../../store/messagesReducer/messagesReducer";

type PropsType = {
  newMessageText: string
  dispatch: (action: any) => void
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