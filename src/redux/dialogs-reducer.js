const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogsData: [
		{ id: 1, name: 'Andrei', },
		{ id: 2, name: 'Dima', },
		{ id: 3, name: 'Iana', },
		{ id: 4, name: 'Katea', },
		{ id: 5, name: 'Sam', },
		{ id: 6, name: 'Oleg', },
	],
	messageData: [
		{ id: 1, message: 'Hi', },
		{ id: 2, message: 'How are you?', },
		{ id: 3, message: 'Yo', },
		{ id: 4, message: 'Yo', },
		{ id: 5, message: 'Cool', },
		{ id: 6, message: 'Good Day', },
	],
	newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return (state);
		
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messageData.push({ id: 7, message: body });
			return (state);
	
		default:
			return (state);
	}
}

export const sendMessageCreator = () => {
	return (
		{
			type: SEND_MESSAGE,
		}
	);
}
export const updateNewMessageBodyCreator = (body) => {
	return (
		{
			type: UPDATE_NEW_MESSAGE_BODY,
			body: body,
		}
	);
}

export default dialogsReducer;