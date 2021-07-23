import ProfileInfo from './ProfileInfo/ProfileInfo';
// import MyPosts from './MyPosts/MyPosts';
// import { addPost } from '../../redux/state';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';



function Profile(props) {
	return (
		<>
			<ProfileInfo profile={ props.profile}/>
			<MyPostsContainer/>
		</>
	);
}

export default Profile;