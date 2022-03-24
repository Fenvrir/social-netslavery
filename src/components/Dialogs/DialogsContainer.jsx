import Dialogs from "./Dialogs";
import {
  updateNewMessageText,
  sendMessage,
} from "../../redux/dialogs-reducer.js";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

export default compose(
  connect(mapStateToProps, { updateNewMessageText, sendMessage }),
  withAuthRedirect
)(Dialogs);
