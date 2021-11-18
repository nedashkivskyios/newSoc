import {AppStateType} from "../../../../store/store";
import {addMessageAC, changeMessageTextAC, MessagesDataType} from "../../../../store/messagesReducer/messagesReducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Messages} from "./Messages";

type mapStateToPropsType = {
  messagesData: MessagesDataType
  newMessageText: string
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  messagesData: state.messages.messagesData,
  newMessageText: state.messages.newMessageText,
})

type mapDispatchToPropsType = {
  onChangeMessageText: (text: string) => void,
  onAddMessageButtonClick: () => void,
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  onChangeMessageText: (text: string) => {
    dispatch(changeMessageTextAC(text))
  },
  onAddMessageButtonClick: () => {
    dispatch(addMessageAC())
  },
})

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
