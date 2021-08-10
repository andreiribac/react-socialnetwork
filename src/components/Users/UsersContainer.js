import React from "react";
import { connect } from 'react-redux';
import {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Prealoder from "../common/Preloader/Prealoder";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


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
		/* this.props.toggleIsFetching(true);

		usersAPI.getUsers(this.props.setCurrentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount);
		}); */
		/* Все это меняется когда мы сделали thunk - функцию */
		// this.props.getUsers();
		// даже ту сокращенную запись мы меняем на нижнюю
		this.props.getUsers(this.props.setCurrentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
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
					// toggleFollowingProgress={this.props.toggleFollowingProgress}
					followingInProgress={this.props.followingInProgress}
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
			followingInProgress: state.usersPage.followingInProgress,
		}
	)
};

// export default connect(mapStateToProps, {
// 	follow,
// 	unfollow,
// 	setCurrentPage,
// 	toggleFollowingProgress,
// 	getUsers,
// })(UsersAPIComponent);

export default compose(
	// withAuthRedirect,
	connect(mapStateToProps, {
		follow,
		unfollow,
		setCurrentPage,
		toggleFollowingProgress,
		getUsers,
	}),

)(UsersAPIComponent)