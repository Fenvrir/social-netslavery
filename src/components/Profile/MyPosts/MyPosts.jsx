import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";

function MyPosts(props) {

  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} avatar={p.avatar} />
  ));

  const onPostChange = (ev) => {
    let text = ev.target.value;
    props.updateNewPostText(text);
  }

  const onAddPost = () => {
    props.addNewPost();
  }

  return (
    <div className={s.post__block}>
      <div>
        <div className={s.content__textArea}>
          <textarea
            value={props.newPostText}
            onChange={(ev) => onPostChange(ev)}
            rows="4"
            cols="120"
          />
        </div>
        <div className={s.content__btn}>
          <button onClick={onAddPost} type="button">
            Send
          </button>
        </div>
      </div>
      {postsElements}
    </div>
  );
}

export default MyPosts;
