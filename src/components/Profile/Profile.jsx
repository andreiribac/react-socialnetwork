import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
// import { addPost } from '../../redux/state';



function Profile(props) {
	return (
		<>
			<ProfileInfo />
			<MyPosts
				dispatch={props.dispatch}
				postsData={props.postsData}
				/* addPost={props.addPost} */
				/* newPostText={props.newPostText} */
				updateNewPostText={props.updateNewPostText}
			/>
		</>
	);
}

export default Profile;