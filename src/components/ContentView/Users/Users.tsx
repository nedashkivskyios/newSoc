import React from 'react';
import {User} from "./User/User";
import {UserType} from "../../../store/usersReducer/usersReducer";

type PropsType = {
  users: UserType[],
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
}

export const Users = (props: PropsType) => {

  if (props.users.length === 0) {
    props.setUsers([
      {id: 1, followed: false, fullName: 'Sasha', status: 'status', location: {city: 'BC', country: 'UA'}},
      {id: 2, followed: false, fullName: 'Katia', status: 'status', location: {city: 'BC', country: 'UA'}},
      {id: 3, followed: true, fullName: 'Bodia', status: 'status', location: {city: 'BC', country: 'UA'}},
    ])
  }

  return (
    <div>
      {props.users.map(u => {
        return (
          <User user={u} follow={props.follow} unfollow={props.unfollow}/>
        )
      })}
    </div>
  );
};
