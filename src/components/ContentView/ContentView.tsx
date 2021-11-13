import React from 'react';
import {ContentViewHeader} from "./ContentViewHeader/ContentViewHeader";
import {Routes} from "./Routes";
import state from "../../state/state";

export const ContentView = () => {
  return (
    <div>
      <ContentViewHeader />
      <Routes state={state} changePostText={() => {}} />
    </div>
  );
};
