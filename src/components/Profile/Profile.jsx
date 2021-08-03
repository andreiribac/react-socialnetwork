import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';
import { updateStatus } from '../../redux/profile-reducer';



function Profile(props) {
	return (
		<>
			<ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
			<MyPostsContainer/>
		</>
	);
}

export default Profile;