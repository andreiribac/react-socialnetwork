import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


function ProfileInfo(props) {
	if (!props.profile) {
		return <Prealoder />
	}
	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				<img src={props.profile.photos.large} alt="" />
				<div>{props.profile.fullName}</div>
				<div>{props.profile.aboutMe}</div>
				<ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
			</div>
		</>
	);
}

export default ProfileInfo;