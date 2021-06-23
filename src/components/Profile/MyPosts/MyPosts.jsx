import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

	let postsData = [
		{ id: 1, message: 'Hi', count: 11, },
		{ id: 2, message: 'How are you?', count: 16, },
		{ id: 3, message: 'I am cool', count: 18, },
		{ id: 4, message: 'Yo', count: 9, },
		{ id: 5, message: 'Cool', count: 13, },
		{ id: 6, message: 'Good Day', count: 24, },
	];

	let posts = postsData.map((el) => {
		return (
			<Post message={el.message} count={el.count} id={el.id} />
		);
	});

	return (
		<div className={style.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div><textarea name="newPost" id="newPost" cols="30" rows="10"></textarea></div>
				<div><button>Add post</button></div>
			</div>
			<div className={style.posts}>
				{posts}
			</div>
		</div>
	);
}

export default MyPosts;