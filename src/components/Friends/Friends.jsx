import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";
import avatarPng from "./../acces/img/userPng.png";

function Friends(props) {
  const friendsElements = props.friends.map((f) => {
    return (
      <Friend
        name={f.name}
        avatar={f.photos.small ? f.photos.small : avatarPng}
      />
    );
  });

  return <div className={s.friends}>{friendsElements}</div>;
}

export default Friends;
