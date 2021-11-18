import React, {FC} from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {RoutesMain} from "./RoutesMain";
import {AllActionsType, AppStateType} from "../../store/store";

type PropsType = {
  state: AppStateType
  dispatch: (action: AllActionsType) => void
}

export const ContentView: FC<PropsType> = ({state, dispatch}) => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader/>
      <RoutesMain state={state} dispatch={dispatch}/>
    </div>
  );
};
