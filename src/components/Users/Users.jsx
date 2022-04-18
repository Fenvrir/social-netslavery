import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import userPhoto from "../acces/img/userPng.png";
import Preloader from "./Preloader";
import Paginator from "./Paginator";

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
        onToggleFollow={props.onToggleFollow}
        followingInProgress={props.followingInProgress}
      />
    );
  });

  if( props.isFetching ) return <Preloader className={s.preloader}/>

  return (<>
   <div className={s.users_container} >
      <div className={s.page__list}>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} 
                   totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
      </div>
      {users}
      <div className={s.button__show}></div>
    </div>
  </>
  );
};

export default Users;
