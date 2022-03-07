import React from 'react';
import "./App.css"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileSettings from './components/ProfileSettings/ProfileSettings';
import Friends from './components/Friends/Friends';

const App = (props) => {

	return (
		<BrowserRouter>
			<div className='app-wrapper' >
				<Header />
				<NavBar state={props.state.navBarPage} />
				<div className='app-wrapper__content'>
					<Routes>
						<Route
							path='profile'
							element={<Profile
								addPost={props.addPost}
								profilePage={props.state.profilePage}
								updateNewPostText={props.updateNewPostText}
							/>} />
						<Route path='dialogs/*'
							element={<Dialogs
								dialogsPage={props.state.dialogsPage}
								sendMessage={props.sendMessage}
								updateNewMessageText={props.updateNewMessageText}
							/>} />
						<Route path='music' element={<Music />} />
						<Route path='news' element={<News />} />
						<Route path='settings' element={<ProfileSettings />} />
						<Route path='friends' element={
							<Friends
								state={props.state.friendsPage}
							/>} />
					</Routes>
				</div>
			</div >
		</BrowserRouter>
	)
}



export default App
