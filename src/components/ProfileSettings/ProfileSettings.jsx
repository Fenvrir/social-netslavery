import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import s from './ProfileSettings.module.css'

const ProfileSettings = (props) => {
	if(!props.store.getState().auth.isAuth) {
		return <Navigate to='/login'/>
	}
	return (
		<div className={s.profileSettings} >
			ProfileSettings
		</div>
	)
}


export default ProfileSettings;