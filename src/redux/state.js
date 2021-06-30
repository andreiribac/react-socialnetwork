import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ id: 1, message: 'Hi', count: 11, },
				{ id: 2, message: 'How are you?', count: 16, },
				{ id: 3, message: 'I am cool', count: 18, },
				{ id: 4, message: 'Yo', count: 9, },
				{ id: 5, message: 'Cool', count: 13, },
				{ id: 6, message: 'Good Day', count: 24, },
			],
			newPostText: 'text here',
		},
		mesasgePage: {
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
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Andrei', },
				{ id: 2, name: 'Dima', },
				{ id: 3, name: 'Iana', },
				{ id: 4, name: 'Katea', },
				{ id: 5, name: 'Sam', },
				{ id: 6, name: 'Oleg', },
			]
		},
	},
	_callSubscriber() {

	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	_addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			count: 0,
		};

		this._state.profilePage.postsData.push(newPost);
		// this._state.profilePage.postsData = [...this._state.profilePage.postsData, newPost];

		this._state.profilePage.postsData.newPostText = '';
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.mesasgePage = dialogsReducer(this._state.mesasgePage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);

		/* if (action.type === 'ADD-POST') {
			this._addPost();
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText);
		} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.mesasgePage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		} else if (action.type === SEND_MESSAGE) {
			let body = this._state.mesasgePage.newMessageBody;
			this._state.mesasgePage.newMessageBody = '';
			this._state.mesasgePage.messageData.push({id: 7, message: body});
			this._callSubscriber(this._state);
		} */
	}

};




export default store;
window.store = store;