import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<SamuraiJSApp />, document.getElementById('root'));

// callSubscriber(store.getState());
// store.subscribe(() => {
// 	let state = store.getState();
// 	callSubscriber(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();