import React from 'react'
import { connect } from 'react-redux';
import { followUser, unFollowUser, setCurrentPage, toggleIsFetching, getUsers } from '../../redux/users-reducer';
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
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return <Users
      usersPage={this.props.usersPage}
      onFollow={this.onFollow}
      onUnfollow={this.onUnfollow}
      onPageChanged={this.onPageChanged}
      currentPage={this.props.currentPage}
      pages={pages}
      isFetching={this.props.isFetching}
      followingInProgress={this.props.followingInProgress}
      onToggleFollow={this.onToggleFollow}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const UsersContainer = connect(mapStateToProps,
  {
    followUser, unFollowUser, setCurrentPage,
    toggleIsFetching, getUsers
  })(UsersComponent);

export default UsersContainer;