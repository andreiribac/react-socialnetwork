// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, withRouter, } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from "./components/common/Preloader/Prealoder";
import store from './redux/redux-store';
import { Provider } from 'react-redux';



class App extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<NavBar />
				<section className="content">
					<Route path='/profile/:userId?' render={() => {
						return <ProfileContainer />;
					}} />
					<Route path='/dialogs' render={() => {
						return <DialogsContainer />;
					}} />
					<Route path='/news' render={() => {
						return <News />;
					}} />
					<Route path='/music' render={() => {
						return <Music />;
					}} />
					<Route path='/users' render={() => {
						return <UsersContainer />;
					}} />
					<Route path='/settings' render={() => {
						return <Settings />;
					}} />
					<Route path='/login' render={() => {
						return <Login />;
					}} />
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
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default SamuraiJSApp;
