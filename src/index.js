import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
// import { addPost, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

function callSubscriber(state) {
	
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={store.getState()}
				dispatch={store.dispatch.bind(store)}
				store={store}
				/* addPost={store.addPost.bind(store)} */
				/* updateNewPostText={store.updateNewPostText.bind(store)} */
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

callSubscriber(store.getState());
store.subscribe(() => {
	let state = store.getState();
	callSubscriber(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
