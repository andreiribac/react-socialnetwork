import React from 'react';
import Prealoder from '../../common/Preloader/Prealoder';
import style from './ProfileInfo.module.css'

function ProfileStatus(props) {
	return (
		<>
			<div>
				<span>{props.status}</span>
			</div>
			<div>
				<input type="text" value={props.status} />
			</div>
		</>
	);
}

export default ProfileStatus;