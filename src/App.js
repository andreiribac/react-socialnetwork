// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import { addPost, updateNewPostText } from './redux/store';
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App(props) {

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <section className="content">
          <Route path='/profile'
            render={() => {
              return (
                <Profile
                /* store={props.store} */
                /*  dispatch={props.dispatch} */
                /* postsData={props.state.profilePage.postsData} */
                /* addPost={props.addPost} */
                /* newPostText={props.state.profilePage.newPostText} */
                /* updateNewPostText={props.updateNewPostText} */
                />
              )
            }} />
          <Route path='/dialogs'
            render={() => {
              return (
                <DialogsContainer
                /* store={props.store} */
                /*  dispatch={props.dispatch} */
                /* dialogsData={props.state.mesasgePage.dialogsData} */
                /* messageData={props.state.mesasgePage.messageData} */
                />
              )
            }} />
          <Route path='/news' render={() => { return (<News />) }} />
          <Route path='/music' render={() => { return (<Music />) }} />
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
