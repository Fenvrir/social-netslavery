import React from "react"
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

function Header(props) {
	return (
		<header className={s.header}>
			<img
				src="https://pbs.twimg.com/profile_images/925090220067971072/HdaOmOde_400x400.jpg"
			></img>
			<div className={s.login__block}>
				{props.auth.isAuth ? props.auth.login 
				: <NavLink to='/login'>Login</NavLink>}
			</div>
		</header>
	)
}

export default Header
