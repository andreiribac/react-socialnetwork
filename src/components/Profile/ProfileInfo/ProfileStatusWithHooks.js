import React, { useEffect, useState } from 'react';
// import Prealoder from '../../common/Preloader/Prealoder';
// import style from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const activateEditMode = () => {
		setEditMode(true);
	}

	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}

	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value)
	}

	return (
		<>
			{!editMode &&
				<div>
					<b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
				</div>
			}
			{editMode &&
				<div>
				<input autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode} />
				</div>
			}
		</>
	);
}

export default ProfileStatusWithHooks;