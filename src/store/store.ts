import {combineReducers, createStore, Store} from "redux";
import {profileReducer, ProfileReducerActionTypes} from "./profileReducer/profileReducer";
import {messagesReducer, MessagesReducerActionTypes} from "./messagesReducer/messagesReducer";

let rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
})

let store = createStore(rootReducer)

export type StoreStateType = Store<AppStateType>

export type AppStateType = ReturnType<typeof rootReducer>
export type AllActionsType = MessagesReducerActionTypes | ProfileReducerActionTypes

export default store