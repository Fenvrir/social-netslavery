import Preloader from "../Users/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from "./Profile.module.css";
let defaultAvatar = "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png";

function Profile(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content__container}>
      <div>
        <img
          className={s.content__img}
          alt="Anime pic"
          src="https://www.easytutoriel.com/wp-content/uploads/2021/09/fond-d-ecran-anime-windows-11-10-tutoriel-facile.jpg"
        ></img>
      </div>
      <div className={s.content__user}>
        <div className={s.content__avatar}>
          <img
            width="100px"
            alt="Avatar"
            src={
              props.profile.photos.small
                ? props.profile.photos.small
                : defaultAvatar
            }
          ></img>
        </div>
        <div className={s.content__description}>
          <ul>
            <ProfileStatus
              profile={props.profile}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
            <li>Name: {props.profile.fullName}</li>
            {props.profile.aboutMe && <li>About: {props.profile.aboutMe}</li>}
            {props.profile.lookingForAJobDescription && (
              <li>Description: {props.profile.lookingForAJobDescription}</li>
            )}
          </ul>
        </div>
      </div>
      <div className={s.content__posts}>
        <MyPostsContainer store={props.store} />
      </div>
    </div>
  );
}

export default Profile;
