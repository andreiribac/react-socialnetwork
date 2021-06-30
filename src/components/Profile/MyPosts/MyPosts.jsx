import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';




function MyPosts(props) {

	let posts = props.postsData.map((el) => {
		return (
			<Post message={el.message} count={el.count} id={el.id} />
		);
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		// props.addPost(text);
		// props.updateNewPostText('');
		props.dispatch(addPostActionCreator());
		// props.dispatch({ type: 'UPDATE-NEW-POST-TEXT'});
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		// props.updateNewPostText(text);
		props.dispatch(updateNewPostActionCreator(text));
	};

	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea
						onChange={onPostChange}
						ref={newPostElement}
						name="newPost"
						id="newPost"
						cols="60"
						rows="4"
						value={props.newPostText} />
				</div>
				<div><button onClick={addPost}>Add post</button></div>
			</div>
			<div className={style.posts}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;