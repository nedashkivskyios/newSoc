import React, {FC} from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileWallpapper} from "./ProfileWallpapper/ProfileWallpapper";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../state/state";

type PropsType = {
  profilePage: ProfilePageType
  changePostText: (text: string) => void
  addPost: () => void
}

export const Profile: FC<PropsType> = ({profilePage, changePostText, addPost}) => {
  return (
    <div className={styles.profile}>
      <ProfileWallpapper/>
      <ProfileInfo/>
      <MyPosts changePostText={changePostText} profilePage={profilePage} addPost={addPost}/>
    </div>
  );
};
