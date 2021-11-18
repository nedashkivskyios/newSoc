import React, {FC} from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {RoutesMain} from "./RoutesMain";
import {StoreStateType} from "../../store/store";

type PropsType = {
  store: StoreStateType
}

export const ContentView: FC<PropsType> = ({store}) => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader/>
      <RoutesMain store={store}/>
    </div>
  );
};
