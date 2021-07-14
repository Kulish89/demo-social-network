import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  return (
    <div>
      <Paginator
        totalItemsCount={props.totalUserCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
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
  );
};

export default Users;
