import React, {FC} from 'react';
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {PostsDataType} from "../../../state/state";


type PropsType = {
  postsData: PostsDataType

}
export const MyPosts: FC<PropsType> = ({postsData}) => {
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea name="myposts" id="myposts"/>
        <button>+</button>
      </div>
      <div className={styles.posts}>
        {postsData.map((el, i) => <Post key={`${el.id}-${i}`} title={el.title}/>)}
      </div>
    </div>
  );
};


