import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';




function MyPosts(props) {
	console.log('props: ', props);

	let posts = props.posts.map((el) => {
		return (
			<Post message={el.message} count={el.count} id={el.id} />
		);
	});

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.onAddPost();
		// props.dispatch(addPostActionCreator());
	};
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostActionCreator(text);
		
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
				<div><button onClick={onAddPost}>Add post</button></div>
			</div>
			<div className={style.posts}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;