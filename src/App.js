// import logo from './logo.svg';
import React, { Component, Suspense, } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, HashRouter, Route, withRouter, } from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from "./components/common/Preloader/Prealoder";
import store from './redux/redux-store';
import { Provider } from 'react-redux';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));



class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		// if (!this.props.initialized) {
		// 	return <Preloader />
		// }

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<NavBar />
				<section className="content">
					<Route path='/profile/:userId?' render={() => {
						return (
							<ProfileContainer />
						)
					}} />
					<Route path='/users' render={() => {
						return <UsersContainer />;
					}} />
					<Route path='/login' render={() => {
						return <Login />;
					}} />
					<Suspense fallback={<Preloader />}>
						<Route path='/dialogs' render={() => {return <DialogsContainer />}} />
						<Route path='/news' render={() => {return <News />}} />
						<Route path='/music' render={() => {return <Music />}} />
						<Route path='/settings' render={() => {return <Settings />}} />
					</Suspense>
				</section>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});


let AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
	return (
		// <BrowserRouter basename={process.env.PUBLIC_URL}>
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
		// </BrowserRouter>
	)
}

export default SamuraiJSApp;
