import Preloader from "../Users/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
let defaultAvatar = "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png";

function Profile(props) {

  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.content__container}>
        <ProfileInfo {...props}/>
      <div className={s.content__posts}>
        <MyPostsContainer store={props.store} />
      </div>
    </div>
  );
}

export default Profile;
