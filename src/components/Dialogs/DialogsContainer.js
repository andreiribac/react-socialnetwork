import React from 'react';
/* import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'; */
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
/* import StoreContext from '../../StoreContext'; */
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		mesasgePage: state.mesasgePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (body) => {
			dispatch(updateNewMessageBodyCreator(body));
		},
		sendMessage: () => {			
			dispatch(sendMessageCreator());
		},
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;