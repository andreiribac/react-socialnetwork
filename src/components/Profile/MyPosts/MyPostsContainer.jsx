import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		newPostText: state.profilePage.newPostText,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewPostActionCreator: (text) => {
			dispatch(updateNewPostActionCreator(text));
		},
		onAddPost: () => {
			dispatch(addPostActionCreator());
		},
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;