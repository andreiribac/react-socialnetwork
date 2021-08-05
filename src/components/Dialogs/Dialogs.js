import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm, values } from 'redux-form';


function AddMessageForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="firstName" component="textarea" name="newMessageBody" type="text" />
			</div>
			<div><button type="submit">Sent</button></div>
		</form>
	);
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

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

	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
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
			</div>
			<div className={style.messages}>
				<div>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
		</div>
	);
}



export default Dialogs;