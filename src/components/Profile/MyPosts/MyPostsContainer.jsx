import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';





function MyPostsContainer(props) {

	

	

	return (
		<StoreContext.Consumer>
			{
				(store) => {
					let state = store.getState();
					
					let addPost = () => {
						store.dispatch(addPostActionCreator());
					};
					let onPostChange = (text) => {
						store.dispatch(updateNewPostActionCreator(text));
					};

					return (
						<MyPosts
							updateNewPostActionCreator={onPostChange}
							onAddPost={addPost}
							posts={state.profilePage.postsData}
							newPostText={state.profilePage.newPostText}
						/>
					)
				}
			}
		</StoreContext.Consumer>
	);
}

export default MyPostsContainer;