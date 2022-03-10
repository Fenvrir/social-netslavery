import MyPosts from "./MyPosts";
import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator, } from "../../../redux/profile-reducer.js";

function MyPostsContainer(props) {

  let state = props.store.getState();

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      addNewPost={addPost}
      updateNewPostText={onPostChange}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText} />
  );
}

export default MyPostsContainer;
