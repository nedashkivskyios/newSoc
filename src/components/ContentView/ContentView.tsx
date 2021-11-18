import React from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {RoutesMain} from "./RoutesMain";


export const ContentView = () => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader/>
      <RoutesMain/>
    </div>
  );
};
