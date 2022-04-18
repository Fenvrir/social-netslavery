import ProfileStatus from "../ProfileStatus/ProfileStatus";
import s from "./../Profile.module.css";
import { Field, reduxForm } from "redux-form";
import { Input,Textarea } from "../../components/FormsControls/FormsControls";
import style from "./../../components/FormsControls/FormsControl.module.css";

const ProfileForm = (props) => {

  return (
    <form className={s.content__description} 
      onSubmit={props.handleSubmit}>
      {!props.isOwner && (
        <div style={{ float: "right" }}>
          <button className="btn btn-primary" >Save</button>
        </div>
      )}
       {props.error && (
        <div className={style.form_summary_error}>{props.error}</div>
      )}
      <ul>
        <ProfileStatus
          profile={props.profile}
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
        <li>
          <b>Name:</b>
          <Field
            placeholder={props.profile.fullName}
            name="fullName"
            component={Input}
          />
        </li>
        <li>
            <b>About me:
                    <Field
                      placeholder={props.profile.aboutMe}
                      name="aboutMe"
                      component={Textarea}
                    /></b>
          </li>
        {
          <li>
            <b>
              Looking for a job:
              <Field
                name="lookingForAJob"
                component={"input"}
                type={"checkbox"}
              />
            </b>
          </li>
        }
          <li>
            <b>My professional skills: 
                    <Field
                      placeholder={props.profile.lookingForAJobDescription}
                      name="lookingForAJobDescription"
                      component={Textarea}
                    /></b>
          </li>
      </ul>
      <div className={s.contacts}>
        <b>Contacts: </b>{" "}
        {Object.keys(props.profile.contacts).map((key) => {
          return <div>
            <b>{key}</b> <Field
              key={key}
              placeholder={props.profile.contacts[key]}
              name={"contacts." + key.toLocaleLowerCase()}
              component={Input}
            />
        </div>
        })}
      </div>
    </form>
  );
};

const ProfileDataForm = reduxForm({ form: "edit-profile" })(ProfileForm);

export default ProfileDataForm;
