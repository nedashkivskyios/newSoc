import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../../store/store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../../store/usersReducer/usersReducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  users: UserType[]
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    users: state.users.users,
  }
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
  follow: (userId: number) => {
    dispatch(followAC(userId))
  },
  unfollow: (userId: number) => {
    dispatch(unfollowAC(userId))
  },
  setUsers: (users: UserType[]) => {
    dispatch(setUsersAC(users))
  },
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
