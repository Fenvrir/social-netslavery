import React from "react"
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const ColorHeader = styled.b`
@import url('https://fonts.googleapis.com/css2?family=Merriweather&family=Whisper&display=swap');
	font-size: 22px;
	margin: 10px;
	text-transform: uppercase;
	font-family: 'Merriweather', serif;
`

function Header(props) {
	return (
		<header className={s.header}>
				<ColorHeader>Social-Network</ColorHeader>
			<div className={s.login__block}>
				{props.auth.isAuth  
				&& <NavLink to='/login' onClick={props.logout}>Log out</NavLink>}
			</div>
			<div className={s.login__block}>
				{props.auth.isAuth ? props.auth.login 
				: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
