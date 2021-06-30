import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


function DialogsContainer(props) {
	let state = props.store.getState().mesasgePage;

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	}
	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body))
	}



	return (
		<Dialogs
			updateNewMessageBody={onNewMessageChange}
			sendMessage={onSendMessageClick}
			mesasgePage={state}
		/>
	);
}

export default DialogsContainer;