import React, {FC} from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {Routes} from "./Routes";
import {StateType} from "../../state/state";

type PropsType = {
  state: StateType
  changePostText: (text: string) => void
}

export const ContentView: FC<PropsType> = ({state, changePostText}) => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader />
      <Routes state={state} changePostText={changePostText} />
    </div>
  );
};
