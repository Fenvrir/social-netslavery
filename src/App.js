import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import {  HashRouter, Route, Routes } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/acces/preloader/Preloader";



const ProfileContainer = React.lazy(() =>import("./components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() =>import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() =>import("./components/Users/UsersContainer"));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <HashRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar state={this.props.store} />
          <div className="app-wrapper__content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
              <Route
                  path="/*"
                  element={<ProfileContainer  />}
                />
                <Route
                  path="profile/*"
                  element={<ProfileContainer/>}
                />
                <Route
                  path="dialogs/*"
                  element={<DialogsContainer />}
                />
                <Route
                  path="music"
                  element={<MusicContainer store={this.props.store} />}
                />
                <Route
                  path="news"
                  element={<News store={this.props.store} />}
                />
                <Route path="login" element={<Login />} />
                <Route
                  path="settings"
                  element={<ProfileSettings store={this.props.store} />}
                />
                <Route
                  path="friends"
                  element={<FriendsContainer  />}
                />
                <Route path="users" element={<UsersContainer />} />
                <Route path="*" element={<div>404 PAGE NOT FOUND</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </HashRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
