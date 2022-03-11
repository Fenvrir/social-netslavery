import Dialogs from "./Dialogs";
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from "../../redux/dialogs-reducer.js";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onSendNewMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    onMessageChange: (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
