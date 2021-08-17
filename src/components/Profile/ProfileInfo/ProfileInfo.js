import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


function ProfileInfo({ profile, status, updateStatus }) {
	if (!profile) {
		return <Prealoder />
	}
	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				<img src={profile.photos.large} alt="" />
				<div>{profile.fullName}</div>
				<div>{profile.aboutMe}</div>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
			</div>
		</>
	);
}

export default ProfileInfo;