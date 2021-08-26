import React, {useState} from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/tournaments.svg';
import ProfileDataForm from './ProfileDataForm';


function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) {

	let [editMode, setEditMode] = useState(false);

	if (!profile) {
		return <Prealoder />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (formData) => {
		saveProfile(formData);
		// setEditMode(false);
	}


	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={style.descriptionImg} alt="" />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				{editMode
					? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
					: <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>
				}
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}  />

			</div>
		</>
	);
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
	return (
		<div>
			{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
			
			<div><b>My name is:</b> {profile.fullName}</div>
			<div><b>Something about me:</b> {profile.aboutMe}</div>
			<div><b>Lookink for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
			{profile.lookingForAJob &&
				<div><b>My skills:</b> {profile.lookingForAJobDescription}</div>
			}
			<div><b>About me:</b> {profile.aboutMe}</div>
			<div><b>Contacnts:</b> {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}</div>
		</div>
	)
}


const Contact = ({ contactTitle, contactValue }) => {
	return (
		<div className={style.contact}>
			<b>{contactTitle}: </b> {contactValue}
		</div>
	)
}

export default ProfileInfo;