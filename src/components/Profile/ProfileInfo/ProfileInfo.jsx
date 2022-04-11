import ProfileStatus from "./../ProfileStatus/ProfileStatus";
import s from "./../Profile.module.css";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";
let defaultAvatar =
  "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png";

function ProfileInfo(props) {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(!editMode);
    })
  }

  return (
    <div className={s.content__user}>
      <div className={s.content__avatar}>
        <img
          style={{ maxWidth: "250px" }}
          alt="Avatar"
          src={
            props.profile.photos.large
              ? props.profile.photos.large
              : defaultAvatar
          }
        ></img>
        <div>
          {props.isOwner && (
            <input type={"file"} onChange={(e) => onMainPhotoSelected(e)} />
          )}
        </div>
      </div>
      {editMode 
        ? <ProfileDataForm onSubmit={onSubmit}  status={props.status}
            initialValues={props.profile}
            updateUserStatus={props.updateUserStatus} profile={props.profile}/> 
        : <ProfileData   status={props.status}
           updateUserStatus={props.updateUserStatus}  goToEditMode={() => setEditMode(!editMode)} profile={props.profile}/>}
    </div>
  );
}



const ProfileData = (props) => {
  Object.filter = (obj, predicate) => 
  Object.keys(obj)
        .filter( key => predicate(obj[key]) )
        .reduce( (res, key) => (res[key] = obj[key], res), {} );
        
let contacts = Object.filter(props.profile.contacts, contact => contact !== null);

  return (<div className={s.content__description}>
            {!props.isOwner && <div style={{float: "right"}}> 
              <button onClick={props.goToEditMode}>Edit</button> 
            </div>}
            <ul>
            <ProfileStatus
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
              />
              <li> 
                <b>
                  Name: {props.profile.fullName}
                </b>
              </li>
              {props.profile.aboutMe && 
              <li> 
                <b>
                  About: {props.profile.aboutMe}
                </b>
                </li>}
              {<li>
                  <b>
                    Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
                  </b>
              </li>}
              <li>
                  <b>
                    My professional skills: {props.profile.lookingForAJobDescription }
                  </b>
              </li>
            </ul>
            <div className={s.contacts}>
              <b>Contacts: </b> {Object.keys(contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
              })}
            </div>
        </div>)
}


const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b>: <b>{contactValue}</b></div>
}

export default ProfileInfo;
