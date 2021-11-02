import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'
import {NAVIGATION_PATH} from "../pages/Routes";

type PropsType = {}

export const Dialogs: FC<PropsType> = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogItems}>
        <div className={styles.dialog}><NavLink to={`${NAVIGATION_PATH.dialogs}/1`}>Sasha</NavLink> </div>
        <div className={styles.dialog}><NavLink to={`${NAVIGATION_PATH.dialogs}/2`}>Katia</NavLink></div>
        <div className={styles.dialog}><NavLink to={`${NAVIGATION_PATH.dialogs}/3`}>Ed</NavLink></div>
        <div className={styles.dialog}><NavLink to={`${NAVIGATION_PATH.dialogs}/4`}>Nekras</NavLink></div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>hihi</div>
        <div className={styles.message}>yoyo</div>
        <div className={styles.message}>abraKadabra</div>
      </div>
    </div>
  );
};
