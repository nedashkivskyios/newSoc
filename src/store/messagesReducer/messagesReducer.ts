import {AC_TYPES} from "../store";

let initialState: MessagesPageType = {
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
}

export const messagesReducer = (state = initialState, action: MessagesReducerActionTypes): MessagesPageType => {
 debugger
  switch (action.type) {
    case AC_TYPES.CHANGE_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.text,
      }
    }
    case AC_TYPES.ADD_MESSAGE: {
      const newMessage = {id: 1, message: state.newMessageText}
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: "",
      }
    }
    default: {
      return state
    }
  }
}

export const changeMessageTextAC = (text: string) => ({
  type: AC_TYPES.CHANGE_MESSAGE_TEXT,
  text,
} as const)

export const addMessageAC = () => ({
  type: AC_TYPES.ADD_MESSAGE,
} as const)

export type MessagesReducerActionTypes =
  | ReturnType<typeof changeMessageTextAC>
  | ReturnType<typeof addMessageAC>

export type MessagesPageType = {
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