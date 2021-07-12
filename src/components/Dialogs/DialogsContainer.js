import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


function DialogsContainer(props) {




	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState().mesasgePage;

					let onSendMessageClick = () => {
						store.dispatch(sendMessageCreator())
					}
					let onNewMessageChange = (body) => {
						store.dispatch(updateNewMessageBodyCreator(body))
					}
					return (
						<Dialogs
							updateNewMessageBody={onNewMessageChange}
							sendMessage={onSendMessageClick}
							mesasgePage={state}
						/>
					)
				}
			}

		</StoreContext.Consumer>
	);
}

export default DialogsContainer;