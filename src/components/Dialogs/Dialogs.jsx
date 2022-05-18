import { Field, reduxForm } from "redux-form";
import { Textarea } from "../components/FormsControls/FormsControls";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { maxLengthCreator, required } from "../../utils/validators/validator";

const maxLength_30 = maxLengthCreator(30);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.textarea__container}>
        <div className={s.dialogs__textarea}>
          <Field
            rows="4"
            cols="120"
            name="newMessage"
            placeholder="Enter your message"
            validate={[required, maxLength_30]}
            component={Textarea}
          />
        </div>
        <div className={s.dialogs__btn}>
          <button className="btn btn-secondary" type="submit">
            Send message
          </button>
        </div>
      </div>
    </form>
  );
};

const DialogReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

const Dialogs = (props) => {
  const dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} active={d.active} avatar={d.avatar} />
  ));

  const messageElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} avatar={m.avatar} />
  ));

  const onSubmit = (formData) => {
    props.sendMessage(formData.newMessage);
    console.log(formData.newMessage);
  };

  return (
    <div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.dialogsMessages}>{messageElements}</div>
      </div>
      <DialogReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Dialogs;
