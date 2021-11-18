import {DialogItemsDataType} from "../../../../store/messagesReducer/messagesReducer";
import {DialogItems} from "./DialogItems";
import {AppStateType} from "../../../../store/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";


type mapStateToPropsType = {
  dialogItemsData: DialogItemsDataType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  dialogItemsData: state.messages.dialogItemsData,
})

type mapDispatchToPropsType = {}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({})

export const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems)

