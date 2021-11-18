import React, {FC} from 'react';
import {addPostAC, changePostTextAC} from "../../../../store/profileReducer/profileReducer";
import {StoreStateType} from "../../../../store/store";
import {MyPosts} from "./MyPosts";


type PropsType = {
  store: StoreStateType
}

export const MyPostsContainer: FC<PropsType> = ({store}) => {
  const state = store.getState()

  const onAddPostButtonClick = () => {
    store.dispatch(addPostAC())
  }
  const onTAChange = (text: string) => {
    store.dispatch(changePostTextAC(text))
  }

  return (
    <MyPosts profilePage={state.profile}
             onAddPostButtonClick={onAddPostButtonClick}
             onTAChange={onTAChange}
    />
  );
};


