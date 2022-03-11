import MyPosts from "./MyPosts";
import { updateNewPostTextActionCreator, addPostActionCreator, } from "../../../redux/profile-reducer.js";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
