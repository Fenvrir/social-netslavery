import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUserProfile, getUserStatus, savePhoto, 
  saveProfile, updateUserStatus,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { withMatch } from "../../HOC/withMatch";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match
      ? this.props.match.params.userId
      : this.props.authorizedUserId;
    if (!userId) {
      this.props.history.push("/login");
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={this.props.match === null}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withMatch,
  withAuthRedirect
)(ProfileContainer);
