import * as axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/tournaments.svg'

function Users(props) {

	let getUsers = () => {
		if (props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				// debugger;
				props.setUsers(response.data.items);
			});
		}
	}
	

	return (
		<>
			<button onClick={getUsers}>Get users</button>
			<div className={styles.userContainer}>
			{
				props.users.map((u) => {
					return (
						<div key={u.id} className={`${styles.userItem} ${styles.textCenter}`}>
							<span>
								<div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="a" /></div>
								<div>
									{u.followed
										? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
										: <button onClick={() => { props.follow(u.id) }}>Follow</button>
									}
								</div>
							</span>
							<span>
								<span>
									<div>{u.name}</div>
									<div>{u.status}</div>
								</span>
								<span>
									<div>{'u.location.country'}</div>
									<div>{'u.location.city'}</div>
								</span>
							</span>
						</div>
					);
				})
				}
			</div>
		</>
	)
}

export default Users;