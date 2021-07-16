const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		// { id: 1, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: false, fullName: 'Andrei', status: 'I am a boss', location: { city: 'Chisinau', country: 'Moldova' }, },
		// { id: 2, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: false, fullName: 'Iana', status: 'I am a boss too', location: { city: 'Moscow', country: 'Russia' }, }, ,
		// { id: 3, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: true, fullName: 'Katea', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' }, },
		// { id: 4, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: false, fullName: 'Andrei', status: 'I am a boss', location: { city: 'Chisinau', country: 'Moldova' }, },
		// { id: 5, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: false, fullName: 'Andrei', status: 'I am a boss', location: { city: 'Chisinau', country: 'Moldova' }, },
		// { id: 6, photoUrl: 'https://casinos-landing.s3-eu-west-1.amazonaws.com/zigzag777/_main_img/__21/birthday-21/ZigZag777_widget_Birthday5.png', followed: false, fullName: 'Andrei', status: 'I am a boss', location: { city: 'Chisinau', country: 'Moldova' }, },
	
	]
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW: {
			return ({
				...state,
				// users: [...state.users],
				// Записи равны  users: [...state.users] / users: state.users.map((u)=>{return(u)})
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return ({ ...u, followed: true });
					}
					return (u);
				}),
			});
		}

		case UNFOLLOW: {
			return ({
				...state,
				users: state.users.map((u) => {
					if (u.id === action.userId) {
						return ({ ...u, followed: false });
					}
					return (u);
				}),
			});
		}

		case SET_USERS: {
			return ({
				...state,
				users: [...state.users, ...action.users],
			});
		}

		default:
			return { ...state };

	}

}

export const followAC = (userId) => {
	return (
		{
			type: FOLLOW,
			userId,
		}
	);
}
export const unfollowAC = (userId) => {
	return (
		{
			type: UNFOLLOW,
			userId,
		}
	);
}
export const setUsersAC = (users) => {
	return (
		{
			type: SET_USERS,
			users,
		}
	);
}

export default usersReducer;