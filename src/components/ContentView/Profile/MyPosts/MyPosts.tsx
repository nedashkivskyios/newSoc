import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {addPostAC, changePostTextAC, ProfilePageType} from "../../../../store/profileReducer/profileReducer";
import {AllActionsType} from "../../../../store/store";


type PropsType = {
  profilePage: ProfilePageType
  dispatch: (action: AllActionsType) => void
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


