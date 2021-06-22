import style from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
	return (
		<div>
			My posts
			<div>
				<textarea name="newPost" id="newPost" cols="30" rows="10"></textarea>
				<button>Add post</button>
			</div>
			<div className={style.posts}>
				<Post message='Hi' count='11' />
				<Post message='How are you?' count='16' />
				<Post message='I am cool' count='18' />
			</div>
		</div>
	);
}

export default MyPosts;