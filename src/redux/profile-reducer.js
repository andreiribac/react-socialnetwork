const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hi', count: 11, },
		{ id: 2, message: 'How are you?', count: 16, },
		{ id: 3, message: 'I am cool', count: 18, },
		{ id: 4, message: 'Yo', count: 9, },
		{ id: 5, message: 'Cool', count: 13, },
		{ id: 6, message: 'Good Day', count: 24, },
	],
	newPostText: 'text here',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				count: 0,
			};

			state.postsData.push(newPost);
			state.newPostText = '';
			return (state);

		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			return (state);
		
		default:
			return (state);
	}

}

export const addPostActionCreator = () => {
	return (
		{
			type: ADD_POST,
		}
	);
}
export const updateNewPostActionCreator = (text) => {
	return (
		{
			type: UPDATE_NEW_POST_TEXT,
			newText: text
		}
	);
}

export default profileReducer;