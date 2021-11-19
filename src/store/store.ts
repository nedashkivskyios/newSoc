import {combineReducers, createStore, Store} from "redux";
import {profileReducer, ProfileReducerActionTypes} from "./profileReducer/profileReducer";
import {messagesReducer, MessagesReducerActionTypes} from "./messagesReducer/messagesReducer";
import {usersReducer, UsersReducerActionTypes} from "./usersReducer/usersReducer";

let rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  users: usersReducer,
})

let store = createStore(rootReducer)

export type StoreStateType = Store<AppStateType>

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsType =
  MessagesReducerActionTypes
  | ProfileReducerActionTypes
  | UsersReducerActionTypes

export default store