// import * as axios from "axios";
import React from "react";
import styles from './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
	let pageCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pageCount; i++) {
		pages.push(i);
	}
	return (
		<>
			<Paginator currentPage={currentPage} onPageChanged={onPageChanged}
				totalItemsCount={totalUsersCount} pageSize={pageSize} />
			<div className={styles.userContainer}>
				{
					users.map((u) => {
						return (
							<User user={u}
								followingInProgress={props.followingInProgress}
								key={u.id}
								unfollow={props.unfollow}
								follow={props.follow}
								className={`${styles.userItem} ${styles.textCenter}`}
							/>
						);
					})
				}
			</div>

			

		</>
	)
}

export default Users;