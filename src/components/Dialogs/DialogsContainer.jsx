import Dialogs from "./Dialogs";
import { updateNewMessageText, sendMessage } from "../../redux/dialogs-reducer.js";
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const DialogsContainer = connect(mapStateToProps, 
  { updateNewMessageText, sendMessage })(Dialogs);

export default DialogsContainer;
