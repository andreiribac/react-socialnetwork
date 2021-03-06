import axios from 'axios';
import { follow } from '../redux/users-reducer';

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
	},
	follow(userId) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		console.warn('Obsolete method. Please profileAPI object.')
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status });
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile);

		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile(profile) {
		return instance.put(`profile`, profile);
	}
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance.post(`auth/login`, { email, password, rememberMe, captcha });
	},
	logout() {
		return instance.delete(`auth/login`);
	},
}

export const securityAPI = {
	getCaptchaUrl() {
		return instance.get(`security/get-captcha-url`);
	}
}