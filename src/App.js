import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Users/Preloader";

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
 
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar state={this.props.store} />
          <div className="app-wrapper__content">
            <Routes>
              <Route
                path="profile/*"
                element={<ProfileContainer store={this.props.store} />} />
              <Route
                path="dialogs/*"
                element={<DialogsContainer store={this.props.store} />} />
              <Route path="music"
                element={<MusicContainer store={this.props.store} />} />
              <Route path="news" element={<News store={this.props.store} />} />
              <Route path="login" element={<Login />} />
              <Route
                path="settings"
                element={<ProfileSettings
                  store={this.props.store} />} />
              <Route
                path="friends"
                element={<FriendsContainer
                  store={this.props.store} />}
              />
              <Route
                path="users"
                element={<UsersContainer />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})( App);
