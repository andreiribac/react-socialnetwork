import rerenderEntireTree from '../render';

let state = {
	profilePage: {
		postsData: [
			{ id: 1, message: 'Hi', count: 11, },
			{ id: 2, message: 'How are you?', count: 16, },
			{ id: 3, message: 'I am cool', count: 18, },
			{ id: 4, message: 'Yo', count: 9, },
			{ id: 5, message: 'Cool', count: 13, },
			{ id: 6, message: 'Good Day', count: 24, },
		],
	},
	mesasgePage: {
		dialogsData: [
			{ id: 1, name: 'Andrei', },
			{ id: 2, name: 'Dima', },
			{ id: 3, name: 'Iana', },
			{ id: 4, name: 'Katea', },
			{ id: 5, name: 'Sam', },
			{ id: 6, name: 'Oleg', },
		],
		messageData: [
			{ id: 1, message: 'Hi', },
			{ id: 2, message: 'How are you?', },
			{ id: 3, message: 'Yo', },
			{ id: 4, message: 'Yo', },
			{ id: 5, message: 'Cool', },
			{ id: 6, message: 'Good Day', },
		],
	},
	sidebar: {
		friends: [
			{ id: 1, name: 'Andrei', },
			{ id: 2, name: 'Dima', },
			{ id: 3, name: 'Iana', },
			{ id: 4, name: 'Katea', },
			{ id: 5, name: 'Sam', },
			{ id: 6, name: 'Oleg', },
		]
	},
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		count: 0,
	};
	state.profilePage.postsData.push(newPost);
	rerenderEntireTree(state);
};

export default state;