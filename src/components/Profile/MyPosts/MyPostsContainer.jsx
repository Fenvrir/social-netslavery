import MyPosts from "./MyPosts";
import { addPost } from "../../../redux/profile-reducer.js";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
      posts: state.profilePage.posts,
    }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addNewPost: () => {
//       dispatch(addPostActionCreator());
//     },
//     updateNewPostText: (text) => {
//       dispatch(updateNewPostTextActionCreator(text));
//     }
//   }
// }


const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;
