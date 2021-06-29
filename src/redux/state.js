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
		
		// this._state.profilePage.postsData.push(newPost);
		this._state.profilePage.postsData = [...this._state.profilePage.postsData, newPost];
		
		this._state.profilePage.postsData.newPostText = '';
		this._callSubscriber(this._state);
	},
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},
	dispatch(action) {
		
		if (action.type === 'ADD-POST') {
			
			this._addPost();
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._updateNewPostText(action.newText);
		}
	}

};

export default store;
window.store = store;