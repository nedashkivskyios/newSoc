import React, {ChangeEvent, FC} from 'react';
import {Post} from "./Post/Post";
import styles from "./MyPosts.module.css"
import {ProfilePageType} from "../../../../store/profileReducer/profileReducer";


type PropsType = {
  profilePage: ProfilePageType
  onAddPostButtonClick: () => void
  onTAChange: (text: string) => void
}

export const MyPosts: FC<PropsType> = (props) => {
  const {
    profilePage,
    onAddPostButtonClick,
    onTAChange,
  } = props

  const onAddPostButtonClickHandler = () => {
    onAddPostButtonClick()
  }
  const onTAChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onTAChange(e.currentTarget.value)
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


