import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

function NavBar() {
	return (
		<nav>
			<div className={s.item}>
				<NavLink
					to="/profile"
					className={navData => navData.isActive ? s.active_link : s.item}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/dialogs"
					className={navdata => navdata.isActive ? s.active_link : s.item}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/music"
					className={navData => navData.isActive ? s.active_link : s.item}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/news"
					className={navData => navData.isActive ? s.active_link : s.item}>
					News
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/settings"
					className={navData => navData.isActive ? s.active_link : s.item}>
					Settings
				</NavLink>
			</div>
		</nav>
	)
}

export default NavBar
