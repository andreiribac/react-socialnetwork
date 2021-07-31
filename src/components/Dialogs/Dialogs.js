import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';


function Dialogs(props) {
	let state = props.mesasgePage;

	let dialogsElements = state.dialogsData.map((element, index) => {
		return (
			<DialogItem name={element.name} id={element.id} key={element.id} />
		)
	});
	let messagesElements = state.messageData.map((el) => {
		return <Message message={el.message} id={el.id} key={el.id} />
	});
	let newMessageBody = state.newMessageBody

	let newPostElement = React.createRef();
	let onSendMessageClick = () => {
		props.sendMessage();
		// props.store.dispatch(sendMessageCreator())
	}
	let onNewMessageChange = (e) => {
		let body = e.target.value;
		props.updateNewMessageBody(body);
		// props.store.dispatch(updateNewMessageBodyCreator(body))
	}

	if (!props.isAuth) {
		return (
			<Redirect to={"/login"} />
		)
	};

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{dialogsElements}
				{/* <div className={style.dialog + ' ' + style.active}>
					<Link to="/dialogs/0">Andrei</Link>
				</div> */}
			</div>
			<div className={style.messages}>
				<div>{messagesElements}</div>
				<div>
					<div>
						<textarea
							ref={newPostElement}
							value={newMessageBody}
							onChange={onNewMessageChange}
							name="newPost"
							id="newPost"
							cols="50"
							rows="5">
						</textarea>
					</div>
					<div><button onClick={onSendMessageClick}>Sent</button></div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;