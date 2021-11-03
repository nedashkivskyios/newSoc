import React, {FC} from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileWallpapper} from "./ProfileWallpapper/ProfileWallpapper";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../state/state";

type PropsType = {
  postsData: PostsDataType
}

export const Profile:FC<PropsType> = ({postsData}) => {
  return (
    <div className={styles.profile}>
      <ProfileWallpapper/>
      <ProfileInfo/>
      <MyPosts postsData={postsData}/>
    </div>
  );
};
