import {combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducerActionTypes} from "./profileReducer/profileReducer";
import {messagesReducer, MessagesReducerActionTypes} from "./messagesReducer/messagesReducer";

let rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
})

let store = createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsType = MessagesReducerActionTypes | ProfileReducerActionTypes

export default store