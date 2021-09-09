import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import styles from "./Users.module.css";

let Users = (props) => {
  return (
    <div>
      <div className={styles.paginator}>
        <Paginator
          totalItemsCount={props.totalUserCount}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
        />
      </div>
      <div className={styles.usersList}>
        {props.users.map((el) => (
          <User
            key={el.id}
            user={el}
            followingInProgress={props.followingInProgress}
            unfollowThunk={props.unfollowThunk}
            followThunk={props.followThunk}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
