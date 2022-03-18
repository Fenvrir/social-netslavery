import { addFriend } from "../../redux/friends-reducer.js";
import Friends from "./Friends.jsx";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  }
};

const FriendsContainer = connect(mapStateToProps, { addFriend } )(Friends);

export default FriendsContainer;
