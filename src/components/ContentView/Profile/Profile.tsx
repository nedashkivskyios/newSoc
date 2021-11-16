import React, {FC} from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileWallpapper} from "./ProfileWallpapper/ProfileWallpapper";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../state/state";

type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: any) => void
}

export const Profile: FC<PropsType> = ({profilePage, dispatch}) => {
  return (
    <div className={styles.profile}>
      <ProfileWallpapper/>
      <ProfileInfo/>
      <MyPosts profilePage={profilePage} dispatch={dispatch}/>
    </div>
  );
};
