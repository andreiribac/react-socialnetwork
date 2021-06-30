import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';




function MyPostsContainer(props) {

	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	};
	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostActionCreator(text));
	};

	return (
		<MyPosts
			updateNewPostActionCreator={onPostChange}
			onAddPost={addPost}
			posts={state.profilePage.postsData}
			newPostText={state.profilePage.newPostText}
		/>
	);
}

export default MyPostsContainer;