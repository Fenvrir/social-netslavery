import React from "react";
import s from "./Friend.module.css";

function Friend(props) {
  return (
    <div className={s.friend}>
      <div className={s.friend__name}>{props.name}</div>
      <div className={s.friend__avatar}>
        <img src={props.avatar} alt="User avatar"></img>
      </div>
    </div>
  );
}

export default Friend;
