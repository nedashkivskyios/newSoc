import React, {ChangeEvent, FC} from "react";
import styles from './MessagesInput.module.css'

type PropsType = {
  newMessageText: string
  onAddMessageButtonClick: () => void
  onChangeMessageText: (text: string) => void
}


export const MessagesInput: FC<PropsType> = ({newMessageText, onChangeMessageText, onAddMessageButtonClick}) => {

  const onChangeMessageTextHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeMessageText(e.currentTarget.value)
  }
  const onAddMessageButtonClickHandler = () => {
    onAddMessageButtonClick()
  }

  return (
    <div className={styles.messagesInput}>
      <input type="text" value={newMessageText} onChange={onChangeMessageTextHandler}/>
      <button onClick={onAddMessageButtonClickHandler}>+</button>
    </div>
  )
}