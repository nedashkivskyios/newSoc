let initialState: UsersPageType = {
  users: [],
}

//REDUCER
export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionTypes) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u),
      }
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u),
      }
    }
    case "SET-USERS": {
      return {
        ...state,
        users: [...state.users, ...action.users],
      }
    }
    default: {
      return state
    }
  }
}

// ACTION CREATORS
export const followAC = (userId: number) => {
  return {
    type: 'FOLLOW',
    userId,
  } as const
}
export const unfollowAC = (userId: number) => {
  return {
    type: 'UNFOLLOW',
    userId,
  } as const
}
export const setUsersAC = (users: UserType[]) => {
  return {
    type: 'SET-USERS',
    users,
  } as const
}


// TYPES
type UserLocationType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  followed: boolean
  fullName: string
  status: string
  location: UserLocationType
}
export type UsersPageType = {
  users: UserType[]
}

type FollowActionType = ReturnType<typeof followAC>
type UnfollowActionType = ReturnType<typeof unfollowAC>
type SetUsersActionType = ReturnType<typeof setUsersAC>
export type UsersReducerActionTypes =
  FollowActionType
  | UnfollowActionType
  | SetUsersActionType

