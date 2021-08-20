// import * as axios from "axios";
import React from "react";
import styles from '../../Users/users.module.css';

let Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div className={styles.pageCountContainer}>
		{pages.map(p => {
			return <span className={currentPage === p && styles.selectedPage}
				onClick={(e) => {
					onPageChanged(p);
				}}> {p} /</span>
		})}
	</div>
}
export default Paginator;