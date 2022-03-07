import { useRef } from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props) => {

	const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} active={d.active} avatar={d.avatar} />);
	const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} avatar={m.avatar} />)

	const newMessageElement = useRef(null);

	const sendNewMessage = () => {
		props.sendMessage();
	}

	const onChangeHandler = () => {
		let newMessage = newMessageElement.current.value;
		props.updateNewMessageText(newMessage);
	}

	return (
		<div>
			<div className={s.dialogs} >
				<div className={s.dialogsItems}>
					{dialogsElements}
				</div>
				<div className={s.dialogsMessages}>
					{messageElements}
				</div>
			</div>
			<div className={s.textarea__container}>
				<div className={s.dialogs__textarea} >
					<textarea
						ref={newMessageElement}
						rows="4"
						cols="120"
						value={props.dialogsPage.newMessageText}
						onChange={onChangeHandler}
					/>
				</div>
				<div className={s.dialogs__btn}>
					<button onClick={sendNewMessage} type="submit">Send</button>
				</div>
			</div>
		</div>

	)
}

export default Dialogs;