import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

	let posts = props.postsData.map((el) => {
		return (
			<Post message={el.message} count={el.count} id={el.id} />
		);
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div><textarea ref={newPostElement} name="newPost" id="newPost" cols="30" rows="10"></textarea></div>
				<div><button onClick={ addPost }>Add post</button></div>
			</div>
			<div className={style.posts}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;