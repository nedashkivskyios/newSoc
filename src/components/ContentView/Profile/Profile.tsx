import React, {FC} from 'react';
import styles from './Profile.module.css'
import {ProfileWallpapper} from "./ProfileWallpapper/ProfileWallpapper";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {StoreStateType} from "../../../store/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type PropsType = {
  store: StoreStateType
}

export const Profile: FC<PropsType> = ({store}) => {
  return (
    <div className={styles.profile}>
      <ProfileWallpapper/>
      <ProfileInfo/>
      <MyPostsContainer store={store}/>
    </div>
  );
};
