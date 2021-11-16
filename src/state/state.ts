import {profileReducer, ProfileReducerActionTypes} from "../store/profileReducer/profileReducer";
import {messagesReducer, MessagesReducerActionTypes} from "../store/messagesReducer/messagesReducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: 1, title: "hey how are you ?"},
        {id: 2, title: "im fine and U ?"},
        {id: 3, title: "ta tozhe"},
      ],
      newPostText: "",
    },
    messagesPage: {
      messagesData: [
        {id: 1, message: "hihihi"},
        {id: 2, message: "yoyoyo"},
        {id: 3, message: "KadabraAbra"},
      ],
      dialogItemsData: [
        {id: 1, title: "Sasha"},
        {id: 2, title: "Katia"},
        {id: 3, title: "Fox"},
        {id: 4, title: "Nekras"},
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log('adf')
  },

  getState() {
    return this._state
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer;
  },

  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber()
  },
}

export type AllActionTypes = ProfileReducerActionTypes | MessagesReducerActionTypes

// store type
export type StoreType = typeof store

// state type
export type StateType = {
  profilePage: ProfilePageType
  messagesPage: MessagePageType
}
// TYPES
export type ProfilePageType = {
  postsData: PostsDataType
  newPostText: string
}
// messages TYPES
export type MessagePageType = {
  messagesData: MessagesDataType
  dialogItemsData: DialogItemsDataType
  newMessageText: string
}
export type MessageType = {
  id: number
  message: string
}
export type MessagesDataType = Array<MessageType>

// dialogs TYPES
export type DialogItemType = {
  id: number
  title: string
}
export type DialogItemsDataType = Array<DialogItemType>

// TYPES
export type PostType = {
  id: number
  title: string
}
export type PostsDataType = Array<PostType>


export default store