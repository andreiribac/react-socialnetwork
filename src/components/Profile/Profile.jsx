import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import store from '../../redux/store';
import { updateStatus } from '../../redux/profile-reducer';
import userPhoto from '../../assets/images/tournaments.svg'



function Profile(props) {
	return (
		<>
			<ProfileInfo
				savePhoto={props.savePhoto}
				isOwner={props.isOwner}
				profile={props.profile}
				status={props.status}
				updateStatus={props.updateStatus}
			/>
			<MyPostsContainer/>
		</>
	);
}

export default Profile;