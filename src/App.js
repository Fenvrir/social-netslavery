import React from 'react';
import "./App.css"

const App = () => {
	return <div className='app-wrapper' >
		<header className='header'>
			<img width="100px" src='https://pbs.twimg.com/profile_images/925090220067971072/HdaOmOde_400x400.jpg'></img>
		</header>
		<nav>
			<div> <a href='#'>Profile</a> </div>
			<div> <a href='#'>Messages</a> </div>
			<div> <a href='#'>Music</a> </div>
			<div> <a href='#'>News</a> </div>
		</nav>
		<div className='content'>
			<div>
				<img className='content__header-img' height='350px' src='https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg'></img>
			</div>
			<div className='content__user'>
				<div className='content__user-avatar'>
					<img width="100px" src='https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png'></img>
				</div>
				<div className='content__user-description'>
					<ul>
						<li>Date of birth: 6 july</li>
						<li>City: Almaty</li>
						<li>Education: TSU'21</li>
					</ul>
				</div>
			</div>
			<div className='content__posts'>
				<div className='content-create-new-post'>
					<div className='content__post-input'>
						<textarea rows="4" cols="129" placeholder='text' />

					</div>
					<div className='content__post-btn'>
						<button type='submit'>Send</button>
					</div>
				</div>
				<div className='content__posts-list'>
					<div>Hew, why nobody love me</div>
				</div>
			</div>
		</div>
	</div >
}



export default App
