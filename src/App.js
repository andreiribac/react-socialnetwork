// import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


function App(props) {

  return (
    <Router>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <section className="content">
          <Route path='/profile/:userId?'
            render={() => { return (<ProfileContainer />) }} />
          <Route path='/dialogs'render={() => {return (<DialogsContainer/>)}} />
          <Route path='/news' render={() => { return (<News />) }} />
          <Route path='/music' render={() => { return (<Music />) }} />
          <Route path='/users' render={() => { return (<UsersContainer />) }} />
          <Route path='/settings' render={() => { return (<Settings />) }} />
          {/* <Route path='/settings' component={Profile} /> */}
          {/* <Profile /> */}
        </section>
      </div>
    </Router>
  );
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Изучаю реакт
//         </p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
