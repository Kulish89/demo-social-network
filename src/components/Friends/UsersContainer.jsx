import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from "../../Redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (p) => {
    this.props.requestUsers(p, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
          users={this.props.users}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers: requestUsers,
})(UsersContainer);
