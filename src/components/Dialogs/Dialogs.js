import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


function Dialogs(props) {
	
	let dialogsElements = props.dialogsData.map((element, index) => {
		return (
			<DialogItem name={element.name} id={element.id} key={element.id} />
		)
	});

	let messagesElements = props.messageData.map((el) => {
		return <Message message={el.message} id={el.id} key={el.id} />
	});

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={style.dialogs}>
			<div className={style.dialogsItems}>
				{ dialogsElements }
				{/* <div className={style.dialog + ' ' + style.active}>
					<Link to="/dialogs/0">Andrei</Link>
				</div> */}
			</div>
			<div className={style.messages}>
				{messagesElements}
				<div>
					<div><textarea ref={newPostElement} name="newPost" id="newPost" cols="50" rows="5"></textarea></div>
					<div><button onClick={addPost}>Sent</button></div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;