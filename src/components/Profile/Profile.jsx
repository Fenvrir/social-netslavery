import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";

function Profile(props) {
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
            src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
          ></img>
        </div>
        <div className={s.content__description}>
          <ul>
            <li>Date of birth: 6 july</li>
            <li>City: Almaty</li>
            <li>Education: TSU'21</li>
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
