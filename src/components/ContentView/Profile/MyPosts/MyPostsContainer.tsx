import React from 'react';
import {addPostAC, changePostTextAC, ProfilePageType} from "../../../../store/profileReducer/profileReducer";
import {AppStateType} from "../../../../store/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
  profilePage: ProfilePageType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  profilePage: state.profile,
})

type mapDispatchToPropsType = {
  onAddPostButtonClick: () => void
  onTAChange: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  onAddPostButtonClick: () => {
    addPostAC()
  },
  onTAChange: (text: string) => {
    changePostTextAC(text)
  },
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


