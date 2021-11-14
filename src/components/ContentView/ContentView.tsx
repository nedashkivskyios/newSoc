import React from 'react';
import styles from './ContentView.module.css'
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {Routes} from "./Routes";
import state from "../../state/state";

export const ContentView = () => {
  return (
    <div className={styles.contentView}>
      <ContentViewHeader />
      <Routes state={state} changePostText={() => {}} />
    </div>
  );
};
