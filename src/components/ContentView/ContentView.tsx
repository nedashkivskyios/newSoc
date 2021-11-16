import React, {FC} from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {Routes} from "./Routes";
import {ActionTypes, StateType} from "../../state/state";

type PropsType = {
  state: StateType
  dispatch: (action: ActionTypes) => void
}

export const ContentView: FC<PropsType> = ({state, dispatch}) => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader/>
      <Routes state={state} dispatch={dispatch}/>
    </div>
  );
};
