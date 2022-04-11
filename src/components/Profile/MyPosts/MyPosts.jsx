import Post from "./Post/Post";
import s from "./MyPosts.module.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validator";
import { Textarea } from "../../components/FormsControls/FormsControls";

const maxLength_150 = maxLengthCreator(150);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.content__textArea}>
        <Field component={Textarea} 
        validate={[required, maxLength_150]} 
        name={"newPostText"} rows="4" cols="120" />
      </div>
      <div className={s.content__btn}>
        <button type="submit">Send</button>
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
