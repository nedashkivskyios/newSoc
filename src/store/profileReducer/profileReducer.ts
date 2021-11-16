import {AC_TYPES, ActionTypes, ProfilePageType} from "../../state/state";

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {
  switch (action.type) {
    case AC_TYPES.ADD_POST: {
      const newPost = {
        id: 4,
        title: state.newPostText,
      }
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