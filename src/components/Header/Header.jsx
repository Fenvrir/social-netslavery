import React from "react"
import s from './Header.module.css'

function Header() {
	return (
		<header className={s.header}>
			<img
				src="https://pbs.twimg.com/profile_images/925090220067971072/HdaOmOde_400x400.jpg"
			></img>
		</header>
	)
}

export default Header
