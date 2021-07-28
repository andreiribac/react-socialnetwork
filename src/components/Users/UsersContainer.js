import React from "react";
import * as axios from "axios";
import { connect } from 'react-redux';
import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching
} from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from "../common/Preloader/Prealoder";
import { usersAPI } from '../../api/api';


// function UsersContainer(props) {
// 	return (
// 		<Users />
// 	)
// }

class UsersAPIComponent extends React.Component {

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
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.setCurrentPage, this.props.pageSize).then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCount(data.totalCount);
			});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);

		usersAPI.getUsers(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toggleIsFetching(false);
				this.props.setUsers(data.items);
			});
	}

	render() {
		return (
			<>
				{
					this.props.isFetching
						? <Prealoder />
						: null
				}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return (
		{
			users: state.usersPage.users,
			pageSize: state.usersPage.pageSize,
			totalUsersCount: state.usersPage.totalUsersCount,
			currentPage: state.usersPage.currentPage,
			isFetching: state.usersPage.isFetching,
		}
	)
};

/* let mapDispatchToProps = (dispatch) => {
	return (
		{
			follow: (userID) => {
				dispatch(followAC(userID))
			},
			unfollow: (userID) => {
				dispatch(unfollowAC(userID))
			},
			setUsers: (users) => {
				dispatch(setUsersAC(users))
			},
			setCurrentPage: (pageNumber) => {
				dispatch(setCurrentPageAC(pageNumber))
			},
			setTotalUsersCount: (totalCount) => {
				dispatch(setTotalUsersCountAC(totalCount))
			},
			toggleIsFetching: (isFetching) => {
				dispatch(toggleIsFetchingAC(isFetching))
			}
		}
	)
} */

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
})(UsersAPIComponent);