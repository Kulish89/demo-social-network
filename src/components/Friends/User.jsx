import React from "react";
import userPhoto from "../../assets/images/user.png";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";

let User = ({ user, unfollowThunk, followingInProgress, followThunk }) => {
  return (
    <div className={classes.person}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
            ></img>
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowThunk(user.id);
              }}
            >
              UnFollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followThunk(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.city"}</div>
          <div>{"user.location.country"}</div>
        </span>
      </span>
    </div>
  );
};

export default User;
