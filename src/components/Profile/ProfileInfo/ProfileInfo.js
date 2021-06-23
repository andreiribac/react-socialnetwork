import React from 'react';
import style from './ProfileInfo.module.css'

function ProfileInfo(props) {
	return (
		<>
			<img className={style.contentImg} src="https://st.depositphotos.com/1003348/2724/i/950/depositphotos_27241193-stock-photo-sunset-panorama.jpg" alt="" />
			<div className={style.descriptionBlock}>
				ava + description
			</div>
		</>
	);
}

export default ProfileInfo;