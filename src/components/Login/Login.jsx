import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validator';
import { Input } from '../components/FormsControls/FormsControls';
import s from './Login.module.css'


const LoginForm = (props) => {
	return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field placeholder='Login' name="name"
					validate={[required]} 
					component={Input} />
				</div>
				<div>
					<Field placeholder='Password' name="password" 
					validate={[required]}
					component={Input} />
				</div>
				<div>
					<Field name="rememberMe" component="input" type={'checkbox'}/> Remember me
				</div>
				<button type="submit">Submit</button>
			</form>
	)
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
	auth: state.auth
});

const Login = (props) => {
	const onSubmit = (formData) => {
		console.log(formData);
	}

	return (<div>
	<h1>Login</h1>
	<LoginReduxForm onSubmit={onSubmit}/>
	</div>)
}

export default Login;