import {AC_TYPES, ActionTypes, MessagePageType} from "../../state/state";

export const messagesReducer = (state: MessagePageType, action: ActionTypes): MessagePageType => {
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