import React, {FC} from 'react';
import styles from './Post.module.css'

type PropsType = {
  title: string
}

export const Post: FC<PropsType> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postImg}>
        <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" alt="avatar"/>
      </div>
      <div className={styles.postTitle}>{props.title}</div>

    </div>
  );
};
