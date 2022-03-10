import React from "react";
import { addFriendActionCreator } from "../../redux/friends-reducer.js";
import Friends from "./Friends.jsx";

function FriendsContainer(props) {
  let friendsPage = props.store.getState().friendsPage;

  const addFriend = () => {
    props.store.dispatch(addFriendActionCreator());
  };
  return <Friends friends={friendsPage.friends} addFriend={addFriend} />;
}

export default FriendsContainer;
