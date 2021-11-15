import React, {FC} from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {Routes} from "./Routes";
import {StateType} from "../../state/state";

type PropsType = {
  state: StateType
  changePostText: (text: string) => void
  addPost: () => void
}

export const ContentView: FC<PropsType> = ({state, changePostText, addPost}) => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader/>
      <Routes state={state} addPost={addPost} changePostText={changePostText}/>
    </div>
  );
};
