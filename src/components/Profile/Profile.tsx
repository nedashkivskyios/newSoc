import React from 'react';
import styles from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <img
          src="https://lh3.googleusercontent.com/proxy/TSY_RD8o5SCRt4dU3HQXI5HptKOMkdoE32BvZkN_wOZcJBkmXd4lLqodcOvjr7V7wdmjbc5HSyxXa77n6-ZsLIUXmFfa-WTpaW4kTvHLe6N2"
          alt="adsfasdf"/>
      </div>
      <div className={styles.avatar}>
        <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" alt="avatar"/>
        description
      </div>
      <MyPosts/>
    </div>
  );
};
