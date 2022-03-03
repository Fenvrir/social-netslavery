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

const App = () => {

	function isEven(n) {
		if (n < 0) {
			n = -(n);
		}
		if (n === 0) {
			console.log(true);
		} else if (n === 1) {
			console.log(false);
		} else {

			return isEven(n - 2);
		}
	}
	isEven(-10);

	return (
		<BrowserRouter>
			<div className='app-wrapper' >
				<Header />
				<NavBar />
				<div className='app-wrapper__content'>
					<Routes>
						<Route path='profile' element={<Profile />} />
						<Route path='dialogs' element={<Dialogs />} />
						<Route path='music' element={<Music />} />
						<Route path='news' element={<News />} />
						<Route path='settings' element={<ProfileSettings />} />
					</Routes>
				</div>
			</div >
		</BrowserRouter>
	)
}



export default App
