// import * as axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/tournaments.svg'

let Users = (props) => {
	let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}

	return (
		<>
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
			<div className={styles.pageCountContainer}>
				{pages.map(p => {
					return (
						<div>
							<span className={props.currentPage === p && styles.selectedPage}
								onClick={(e) => { props.onPageChanged(p); }}>{p}</span>
							/
						</div>
					)
				})}
			</div>

		</>
	)
}

export default Users;