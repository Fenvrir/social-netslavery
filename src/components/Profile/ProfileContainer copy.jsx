import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { withMatch } from "../../HOC/withMatch";
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    debugger;
    let userId = this.props.match 
    ? this.props.match.params.userId 
    : this.props.authorizedUserId;
  if(!userId) {
    this.props.history.push('/login');
  }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount(){
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState){
    // debugger;
      this.refreshProfile();
  }

  render() {
    debugger;
    return <Profile {...this.props} 
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateUserStatus={this.props.updateUserStatus}
           /> 
          }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId
 
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withMatch,
  withAuthRedirect,
)(ProfileContainer);
