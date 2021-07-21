import * as axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/tournaments.svg'

class Users extends React.Component {

	/* Если констркутор только пребрасывает props то можно его не писать
		он делает это по умолчанию
	*/
	/* constructor(props) {
		super(props);
	} */



	/* Раньше функция, теперь это метод */
	/* getUsers = () => {
		if (this.props.users.length === 0) {
			axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
				this.props.setUsers(response.data.items);
			});
		}
	} */

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsersCount(response.data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {

		let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
		let pages = [];
		for (let i = 1; i <= pageCount; i++) {
			pages.push(i);
		}

		return (
			<>
				{/* <button onClick={this.getUsers}>Get users</button> */}
				<div className={styles.pageCountContainer}>
					{pages.map(p => {
						return (
							<div>
								<span className={this.props.currentPage === p && styles.selectedPage}
									onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
								/
							</div>
						)
					})}
				</div>
				<div className={styles.userContainer}>
					{
						this.props.users.map((u) => {
							return (
								<div key={u.id} className={`${styles.userItem} ${styles.textCenter}`}>
									<span>
										<div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="a" /></div>
										<div>
											{u.followed
												? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
												: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
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
}

export default Users;