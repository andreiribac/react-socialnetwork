import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
// import { addPost } from '../../redux/state';



function Profile(props) {
	
	return (
		<>
			<ProfileInfo />
			<MyPosts
				postsData={props.postsData}
				addPost={props.addPost}
			/>
		</>
	);
}

export default Profile;