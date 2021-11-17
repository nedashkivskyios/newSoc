import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionTypes} from "./profileReducer/profileReducer";
import {messagesReducer, MessagesReducerActionTypes} from "./messagesReducer/messagesReducer";

export enum AC_TYPES {
  ADD_POST = 'ADD-POST',
  CHANGE_POST_TEXT = 'CHANGE-POST-TEXT',
  CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT',
  ADD_MESSAGE = 'ADD-MESSAGE',
}

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsType = MessagesReducerActionTypes | ProfileReducerActionTypes

export default store