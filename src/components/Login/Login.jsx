import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validator';
import { Input } from '../components/FormsControls/FormsControls';
import style from './../components/FormsControls/FormsControl.module.css'
import {connect} from 'react-redux';
import { login, getUserAuthData } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const LoginForm = (props) => {
	console.log(props)
	return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field placeholder='Login' name="name"
					validate={[required]} 
					component={Input} />
				</div>
				<div>
					<Field placeholder='Password' name="password" 
					type={'password'}
					validate={[required]}
					component={Input} />
				</div>
				<div>
					<Field name="rememberMe" component="input" type={'checkbox'}/> Remember me
				</div>
				{props.error && <div className={style.form_summary_error}>
					{props.error}
				</div>}
				<button type="submit">Submit</button>
			</form>
	)
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)


const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
		props.login(formData.name, formData.password, formData.rememberMe)
	}
	
	if(props.isAuth) {
		return  <Navigate to="/profile"/>
	}

	return (<div>
		<h1>Login</h1>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>)
}

const mapStateToProps = (state) => ({
	isAuth:state.auth.isAuth
});

export default connect(mapStateToProps, {login,getUserAuthData})(Login);