import {AC_TYPES} from "../store";

let initialState: ProfilePageType = {
    postsData: [
      {id: 1, title: "hey how are you ?"},
      {id: 2, title: "im fine and U ?"},
      {id: 3, title: "ta tozhe"},
    ],
    newPostText: "",
}

export const profileReducer = (state = initialState, action: ProfileReducerActionTypes): ProfilePageType => {
  switch (action.type) {
    case AC_TYPES.ADD_POST: {
      const newPost = {id: 4, title: state.newPostText }
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: "",
      }
    }
    case AC_TYPES.CHANGE_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      }
    }
    default: {
      return state
    }
  }
}

export const addPostAC = () => ({
  type: AC_TYPES.ADD_POST,
} as const)

export const changePostTextAC = (text: string) => {
  return {
    type: AC_TYPES.CHANGE_POST_TEXT,
    text,
  } as const
}

export type ProfileReducerActionTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>

export type ProfilePageType = {
  postsData: PostsDataType
  newPostText: string
}

export type PostType = {
  id: number
  title: string
}
export type PostsDataType = Array<PostType>