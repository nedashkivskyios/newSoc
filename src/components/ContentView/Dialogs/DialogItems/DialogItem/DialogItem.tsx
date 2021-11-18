import React, {FC} from 'react';
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {NAVIGATION_PATH} from "../../../RoutesMain";

type PropsType = {
  id: number
  title: string
}

export const DialogItem: FC<PropsType> = (props) => {
  const {
    id, title,
  } = props
  return (
    <div className={styles.dialog}><NavLink to={`${NAVIGATION_PATH.dialogs}/${id}`}>{title}</NavLink></div>
  )
}