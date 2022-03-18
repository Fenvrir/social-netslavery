import React from 'react'
import {connect} from 'react-redux';
import { followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import * as axios from "axios";
import Users from "./Users";

class UsersComponent extends React.Component {
    componentDidMount() {
      if (this.props.usersPage.status === 0) {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
          });
      }
    }
  
    onFollow = (id) => {
      this.props.followUser(id);
    };
  
    onUnfollow = (id) => {
      this.props.unfollowUser(id);
    };
  
    onPageChanged = (currentPage) => {
      this.props.setCurrentPage(currentPage);
      this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
          });
          
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
           />
    }
  }
  
let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
        
    }
}

const UsersContainer = connect(mapStateToProps, 
  {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersComponent);

export default UsersContainer;