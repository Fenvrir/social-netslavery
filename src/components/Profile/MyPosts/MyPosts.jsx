import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../components/FormsControls/FormsControls";

const maxLength_100 = maxLengthCreator(100);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.content__textArea}>
        <Field component={Textarea} 
        validate={[required, maxLength_100]} 
        name={"newPostText"} rows="4" cols="120" />
      </div>
      <div className={s.content__btn}>
        <button className="btn btn-secondary" type="submit">Send message</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddPostForm);

function MyPosts(props) {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} avatar={p.avatar} />
  ));

  function onSubmit (formData) {
    props.addPost(formData.newPostText);
  }

  return (
    <div className={s.post__block}>
      <PostReduxForm 
      onSubmit={onSubmit}
      />
      {postsElements}
    </div>
  );
}

export default MyPosts;
