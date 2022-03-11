import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

function Friends(props) {

  const friendsElements = props.friends.map((f) => {
    return <Friend name={f.name} avatar={f.avatar} />;
  });
  
  const onAddFriend = () => {
	  props.addFriend();
  }
  
  return (
    <div className={s.friends}>
         {friendsElements}
      <div>
        <button onClick={onAddFriend}>Add friend</button>
      </div>
    </div>
  );
}

export default Friends;
