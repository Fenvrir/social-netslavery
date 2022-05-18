import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.content__list}>
      <div className={s.content__user}>
        <div className={s.avatar}>
          <img src={props.avatar} alt="Avatar" />
        </div>
        <div className={s.item}>
          <p>{props.message}</p>
        </div>
      </div>
      <div className={s.content_feedback}>
        <span>
          <button className="btn btn-success">Like</button>
        </span>
        <span>{props.likesCount}</span>
        <span>
          <button className="btn btn-danger">Dislike</button>
        </span>
      </div>
    </div>
  );
}

export default Post;
