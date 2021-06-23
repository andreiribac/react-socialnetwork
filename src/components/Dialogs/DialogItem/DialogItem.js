import React from 'react';
import style from './DialogItem.module.css';
import { Link } from 'react-router-dom';

function DialogItem(props) {
	let path = "/dialogs/" + props.id;
	return (
		<div className={style.dialog}>
			<Link to={path}>{props.name}</Link>
		</div>
	);
}



export default DialogItem;