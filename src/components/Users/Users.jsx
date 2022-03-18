import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import userPhoto from "../acces/img/user-png.png";
import Preloader from "./Preloader";

const Users = (props) => {
  const users = props.usersPage.users.map((u) => {
    return (
      <User
        avatar={u.photos.small !== null ? u.photos.small : userPhoto}
        name={u.name}
        country={u.country}
        quote={u.status}
        city={u.city}
        followed={u.followed}
        id={u.id}
        onFollowUser={props.onFollow}
        onUnfollowUser={props.onUnfollow}
        // surn={u.surn}
      />
    );
  });

  return (
    <div>
      <h2>Users</h2>
       {props.isFetching && <Preloader/>} 
      <div className={s.page__list}>
        {props.pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.current__page}
              onClick={() => {props.onPageChanged(p)}}>
              {p}
            </span>);})}
      </div>
      {users}
      <div className={s.button__show}></div>
    </div>
  );
};

export default Users;
