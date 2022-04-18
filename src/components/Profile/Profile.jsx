import Preloader from "../Users/Preloader";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

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
