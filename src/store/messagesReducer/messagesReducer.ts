import {MessagePageType} from "../../state/state";
import {AC_TYPES} from "../store";

export const messagesReducer = (state: MessagePageType, action: MessagesReducerActionTypes): MessagePageType => {
  switch (action.type) {
    case AC_TYPES.CHANGE_MESSAGE_TEXT: {

      return {
        ...state,
        newMessageText: action.text,
      };
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