import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
	if (!props.profile) {
		return <Prealoder />
	}
	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				<img src={props.profile.photos.large} alt="" />
				ava + description
			</div>
		</>
	);
}

export default ProfileInfo;