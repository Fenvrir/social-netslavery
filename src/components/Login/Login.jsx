import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../components/FormsControls/FormsControls";
import style from "./../components/FormsControls/FormsControl.module.css";
import { connect } from "react-redux";
import { login, getUserAuthData } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  console.log(captchaUrl)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Login"
          name="name"
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <Field name="rememberMe" component="input" 
			   type={"checkbox"} /> Remember me
      </div>
      {captchaUrl && <img src={captchaUrl}/>}
      {captchaUrl && <Field
          placeholder="Captcha"
          name="captcha"
          validate={[required]}
          component={Input}
        />}
      {error && (
        <div className={style.form_summary_error}>{error}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.name, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, { login, getUserAuthData })(Login);
