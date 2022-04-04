import React from 'react'
import { connect } from 'react-redux';
import { followUser, unFollowUser, setCurrentPage, toggleIsFetching, getUsers } from '../../redux/users-reducer';
import { getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from '../../redux/users-selectors';
import Users from "./Users";


class UsersComponent extends React.Component {
  componentDidMount() {
    if (this.props.usersPage.status === 0) {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }

  onFollow = (id) => {
    this.props.followUser(id);
  };

  onUnfollow = (id) => {
    this.props.unFollowUser(id);
  };
  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.getUsers(currentPage, this.props.pageSize)
  }

  onToggleFollow = (isFetching, id) => {
    this.props.toggleFollowingProgress(isFetching, id);
  }


  render() {
    return <Users
      usersPage={this.props.usersPage}
      onFollow={this.onFollow}
      onUnfollow={this.onUnfollow}
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      isFetching={this.props.isFetching}
      followingInProgress={this.props.followingInProgress}
      onToggleFollow={this.onToggleFollow}
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress:getFollowingInProgress(state),
  }
}

const UsersContainer = connect(mapStateToProps,
  {
    followUser, unFollowUser, setCurrentPage,
    toggleIsFetching, getUsers, getUsersSelector
  })(UsersComponent);

export default UsersContainer;