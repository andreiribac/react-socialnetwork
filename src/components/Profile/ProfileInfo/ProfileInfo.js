import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/tournaments.svg';


function ProfileInfo({ profile, status, updateStatus, isOwner, savePhoto }) {
	if (!profile) {
		return <Prealoder />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0]);
		}
	}

	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				<img src={profile.photos.large || userPhoto} className={style.descriptionImg} alt="" />
				{isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
				<div>{profile.fullName}</div>
				<div>{profile.aboutMe}</div>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</>
	);
}

export default ProfileInfo;