import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
	postsData: [
		{ id: 1, message: 'Hi', count: 11, },
		{ id: 2, message: 'How are you?', count: 16, },
		{ id: 3, message: 'I am cool', count: 18, },
		{ id: 4, message: 'Yo', count: 9, },
		{ id: 5, message: 'Cool', count: 13, },
		{ id: 6, message: 'Good Day', count: 24, },
	],
	profile:null,
	status:'',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				count: 0,
			};
			return {
				...state,
				postsData: [...state.postsData, newPost],
				newPostText: '',
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
		case DELETE_POST:
			return { ...state, postsData: state.postsData.filter(p => p.id != action.postId) }
		case SAVE_PHOTO_SUCCESS:
			// debugger;
			return { ...state, profile: { ...state.profile, photos: action.photos } }
		default:
			let stateCopy = { ...state }
			return (stateCopy);
	}

}

export const addPostActionCreator = (newPostText) => {
	return (
		{
			type: ADD_POST,
			newPostText,
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
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
	let response = await usersAPI.getProfile(userId);
	dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}
export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);

	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export default profileReducer;