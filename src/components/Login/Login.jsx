import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validator";
import { Input } from "../components/FormsControls/FormsControls";
import style from "./../components/FormsControls/FormsControl.module.css";
import { connect } from "react-redux";
import { login, getUserAuthData } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import "./Login.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-25 p-1">
        <Field
          className="form-control "
          placeholder="Login"
          name="name"
          validate={[required]}
          component={Input}
        />
      </div>
      <div className="w-25 p-1">
        <Field
          className="form-control"
          placeholder="Password"
          name="password"
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>
      <div>
        <label>
          <Field
            className="checkbox-inline m-2"
            name="rememberMe"
            component="input"
            type={"checkbox"}
          />{" "}
          Remember me
        </label>
      </div>
      {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
      {captchaUrl && (
        <Field
          placeholder="Captcha"
          name="captcha"
          validate={[required]}
          component={Input}
        />
      )}
      {error && <div className={style.form_summary_error}>{error}</div>}
      <button className="btn btn-success m-2" type="submit">
        Submit
      </button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.name,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }

  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login, getUserAuthData })(Login);
