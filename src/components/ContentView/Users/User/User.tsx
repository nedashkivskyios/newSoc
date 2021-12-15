import React, {FC} from 'react';
import styles from './User.module.css'
import {UserType} from "../../../../store/usersReducer/usersReducer";

type PropsType = {
  user: UserType
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

export const User: FC<PropsType> = (props) => {

  const {
    user,
    follow,
    unfollow,
  } = props

  return (
    <div className={styles.user}>
      <div className={styles.userCardLeftSide}>
        <div className={styles.userPhoto}>
          <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
                                               alt="avatar"/>
        </div>
        <div className={styles.followButtons}>
          {user.followed
            ? <button className={styles.followButtonRed} onClick={() => unfollow(user.id)}>Unfollow</button>
            : <button className={styles.followButtonGreen} onClick={() => follow(user.id)}>Follow</button>}
        </div>
      </div>
      <div className={styles.userCardRightSide}>
        <div className={styles.userInfo}>
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </div>
        <div className={styles.userLocation}>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </div>
      </div>
    </div>
  );
};
