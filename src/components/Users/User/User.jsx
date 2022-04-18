import React from "react";
import { NavLink } from 'react-router-dom';
import s from './User.module.css'

const User = (props) => {

    let btn = props.followed
        ? <button 
            className="btn btn-secondary"
            onClick={() => {
                props.onUnfollowUser(props.id)
            }} id={props.id}
            disabled={props.followingInProgress.some(id => id === props.id)}
            >Unfollow</button>
        : <button
            className="btn btn-secondary"
            disabled={props.followingInProgress.some(id => id === props.id)}
            onClick={() => {
                props.onFollowUser(props.id)      
            }} id={props.id}>Follow</button>;
    return (
        <div className={s.user__container}>
            <div className={s.user__img}>
                <NavLink to={'/profile/' + props.id}>
                    <img src={props.avatar} alt="Avatart" />
                </NavLink>
                <div className={s.follow__button}>
                    {btn}
                </div>
            </div>
            <div className={s.user__description}>
                <div className={s.item}>{props.name  /*+ " " + {state.surn }+ '.'*/}</div>
                <div className={s.item + " " + s.item__right}>{/*{state.country},*/}</div>
                <div className={s.item + ' ' + s.item_quote}>{props.quote}</div>
                <div className={s.item + " " + s.item__right}>city</div>
            </div>
        </div>
    )
};

export default User;
