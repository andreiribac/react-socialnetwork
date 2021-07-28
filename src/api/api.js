import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "26e46316-8d5a-49b4-acec-d4fd4987189a"
	}
});

export const usersAPI = {
	getUsers(pageNumber = 1, pageSize = 35) {
		return (
			instance.get(`users?page=${pageNumber}&count=${pageSize}`)
				.then(response => { return response.data })
		)
	}
}

// export const getUsers = (pageNumber = 1, pageSize = 35) => {
// 		return (
// 			instance.get(`users?page=${pageNumber}&count=${pageSize}`)
// 				.then(response => { return response.data })
// 		)
// 	}

