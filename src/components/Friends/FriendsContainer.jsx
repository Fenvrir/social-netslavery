import { addFriendActionCreator } from "../../redux/friends-reducer.js";
import Friends from "./Friends.jsx";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addFriend: () => dispatch(addFriendActionCreator()),
  }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
