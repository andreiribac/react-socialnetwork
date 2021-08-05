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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let body = action.newMessageBody;
			return {
				...state,
				messageData: [...state.messageData, { id: 7, message: body }],
			};
		}

		default:
			return {...state};
	}
}

export const sendMessageCreator = (newMessageBody) => {
	return (
		{
			type: SEND_MESSAGE,
			newMessageBody,
		}
	);
}

export default dialogsReducer;