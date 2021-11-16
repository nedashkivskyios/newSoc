import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {ActionTypes, addPostAC, changePostTextAC, ProfilePageType} from "../../../../state/state";


type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionTypes) => void
}

export const MyPosts: FC<PropsType> = (props) => {

  const {
    profilePage,
    dispatch,
  } = props

  const onAddPostButtonClickHandler = () => {
    dispatch(addPostAC())
  }
  const onTAChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changePostTextAC(e.currentTarget.value))
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onTAChangeHandler} value={profilePage.newPostText} name="myposts" id="myposts"/>
        <button onClick={onAddPostButtonClickHandler}>+</button>
      </div>
      <div className={styles.posts}>
        {profilePage.postsData.map((el, i) => <Post key={`${el.id}-${i}`} title={el.title}/>)}
      </div>
    </div>
  );
};


