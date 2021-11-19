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
          <div key={u.id}>
            <span>
              <div>img</div>
              <div>
                {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>Follow</button>}
                </div>
            </span>
            <span>
              <span><div>{u.fullName}</div>
              <div>{u.status}</div></span>
              <span><div>{u.location.country}</div><div>{u.location.city}</div></span>
            </span>
          </div>
        )
      })}
      <User/>
    </div>
  );
};
