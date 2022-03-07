import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

function NavBar(props) {

	return (
		<nav>
			<div className={s.item}>
				<NavLink
					to="/profile"
					className={navData => navData.isActive ? s.active_link : ''}>
					Profile
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/dialogs"
					className={navdata => navdata.isActive ? s.active_link : ''}>
					Messages
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/music"
					className={navData => navData.isActive ? s.active_link : ''}>
					Music
				</NavLink>
			</div>
			<div className={s.item}>
				<NavLink
					to="/news"
					className={navData => navData.isActive ? s.active_link : ''}>
					News
				</NavLink>
			</div>
			<div className={s.item + ' ' + s.settings}>
				<NavLink
					to="/settings"
					className={navData => navData.isActive
						? s.active_link
						: ''}>
					Settings
				</NavLink>
			</div>
			<div className={s.item + ' ' + s.friends}>
				<NavLink
					to="/friends"
					className={navData => navData.isActive
						? s.active_link
						: ''}>
					Friends
				</NavLink>
			</div>
		</nav>
	)
}

export default NavBar
