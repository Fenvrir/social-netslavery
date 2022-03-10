import Dialogs from "./Dialogs";
import {updateNewMessageTextActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer.js";

const DialogsContainer = (props) => {
  let dialogsPage = props.store.getState().dialogsPage;

  const onSendNewMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  const onMessageChange = (newMessage) => {
    let action = updateNewMessageTextActionCreator(newMessage);
    props.store.dispatch(action);
  };

  return (
    <Dialogs dialogsPage={dialogsPage}
             onSendNewMessage={onSendNewMessage} 
             onMessageChange={onMessageChange}        
    />
    )
};

export default DialogsContainer;
