import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {

	let dialogsData = [
		{ id: 1, name: 'Andrei', },
		{ id: 2, name: 'Dima', },
		{ id: 3, name: 'Iana', },
		{ id: 4, name: 'Katea', },
		{ id: 5, name: 'Sam', },
		{ id: 6, name: 'Oleg', },
	];

	let messageData = [
		{ id: 1, message: 'Hi', },
		{ id: 2, message: 'How are you?', },
		{ id: 3, message: 'Yo', },
		{ id: 4, message: 'Yo', },
		{ id: 5, message: 'Cool', },
		{ id: 6, message: 'Good Day', },
	];
	
	let dialogsElements = dialogsData.map((element, index) => {
		return (
			<DialogItem name={element.name} id={element.id} key={element.id} />
		)
	});

	let messagesElements = messageData.map((el) => {
		return <Message message={el.message} id={el.id} key={el.id} />
	});

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{ dialogsElements }
				{/* <div className={style.dialog + ' ' + style.active}>
					<Link to="/dialogs/0">Andrei</Link>
				</div> */}
			</div>
			<div className={style.messages}>
				{ messagesElements }
			</div>
		</div>
	);
}

export default Dialogs;