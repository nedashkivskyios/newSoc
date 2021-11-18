import React from 'react';
import styles from './Dialogs.module.css'
import {MessagesContainer} from "./Messages/MessagesContainer";
import {DialogItemsContainer} from "./DialogItems/DialogItemsContainer";

export const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <DialogItemsContainer/>
      <MessagesContainer/>
    </div>
  );
};
