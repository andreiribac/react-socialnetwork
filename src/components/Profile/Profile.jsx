import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import { addPost } from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';



function Profile(props) {
	return (
		<>
			<ProfileInfo />
			<MyPostsContainer
				/* store={props.store} */
				/* posts={props.profilePage.postsData} */
				/* dispatch={props.dispatch} */
				/* postsData={props.postsData} */
				/* addPost={props.addPost} */
				/* newPostText={props.newPostText} */
				// updateNewPostText={props.updateNewPostText}
			/>
		</>
	);
}

export default Profile;