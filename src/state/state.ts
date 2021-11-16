export enum AC_TYPES {
  ADD_POST = 'ADD-POST',
  CHANGE_POST_TEXT = 'CHANGE-POST-TEXT',
  CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT',
  ADD_MESSAGE = 'ADD-MESSAGE',
}


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
      newMessageText: '',
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

  dispatch(action: ActionTypes) {
    switch (action.type) {
      case AC_TYPES.ADD_POST: {
        const newPost = {
          id: 4,
          title: this._state.profilePage.newPostText,
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber()
        break
      }
      case AC_TYPES.CHANGE_POST_TEXT: {
        this._state.profilePage.newPostText = action.text
        this._callSubscriber()
        break
      }
      case AC_TYPES.CHANGE_MESSAGE_TEXT: {
        this._state.messagesPage.newMessageText = action.text
        this._callSubscriber()
        break
      }
      case AC_TYPES.ADD_MESSAGE: {
        const newMessage = {id: 1, message: this._state.messagesPage.newMessageText}
        this._state.messagesPage.messagesData.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber()
        break
      }
      default: {
        throw new Error('AC_TYPE wrong')
      }
    }
  },
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
export const changeMessageTextAC = (text: string) => ({
  type: AC_TYPES.CHANGE_MESSAGE_TEXT,
  text,
}as const)
export const addMessageAC = () => ({
  type: AC_TYPES.ADD_MESSAGE
} as const)

//TYPES

export type ActionTypes =
  ReturnType<typeof addPostAC>
  | ReturnType<typeof changePostTextAC>
  | ReturnType<typeof changeMessageTextAC>
  | ReturnType<typeof addMessageAC>

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