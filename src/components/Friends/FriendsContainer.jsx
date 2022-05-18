import Friends from "./Friends.jsx";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect.jsx";
import axios from "axios";
import { useEffect } from "react";
import { getFriends, setFriends } from "../../redux/friends-reducer";
import Preloader from "../acces/preloader/Preloader.jsx";

const FriendsContainer = (props) => {
  useEffect(() => {
    props.getFriends();
  }, []);

  if (!props.friends) return <Preloader />;
  return <Friends {...props} />;
};

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
  };
};

const FriendsWithRedirect = withAuthRedirect(FriendsContainer);

export default connect(mapStateToProps, { getFriends, setFriends })(
  FriendsWithRedirect
);
