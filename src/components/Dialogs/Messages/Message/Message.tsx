import React, {FC} from 'react';
import styles from "./Message.module.css";

type PropsType = {
  message: string
}

export const Message: FC<PropsType> = (props) => {
  const {
    message,
  } = props
  return (
    <div className={styles.message}>{message}</div>
  );
};
