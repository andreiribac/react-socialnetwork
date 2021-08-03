import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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
	profile:null,
	status:'',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				count: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: '',
			}
		}

		case UPDATE_NEW_POST_TEXT: {
			return  {
				...state,
				newPostText: action.newText,
			}
		}
		case SET_USER_PROFILE: {
			return  {
				...state,
				profile: action.profile,
			}
		}
		case SET_STATUS: {
			return  {
				...state,
				status: action.status,
			}
		}
		default:
			let stateCopy = { ...state }
			return (stateCopy);
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
export const setUserProfile = (profile) => {
	return (
		{
			type: SET_USER_PROFILE,
			profile
		}
	);
}
export const setStatus = (status) => {
	return (
		{
			type: SET_STATUS,
			status
		}
	);
}
export const getUserProfile = (userId) => (dispatch) => {
	usersAPI.getProfile(userId)
		.then(response => {
			dispatch(setUserProfile(response.data));
		});
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId)
		.then(response => {
			dispatch(setStatus(response.data));
		});
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status));
			}
		});
}

export default profileReducer;