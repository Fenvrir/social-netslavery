import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MusicContainer from "./components/Music/MusicContainer";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar state={props.store} />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="profile/*"
              element={<ProfileContainer store={props.store} />} />
            <Route
              path="dialogs/*"
              element={<DialogsContainer store={props.store} />} />
            <Route path="music"
              element={<MusicContainer store={props.store} />} />
            <Route path="news" element={<News store={props.store} />} />
            <Route path="login" element={<Login />} />
            <Route
              path="settings"
              element={<ProfileSettings
                store={props.store} />} />
            <Route
              path="friends"
              element={<FriendsContainer
                store={props.store} />}
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
};

export default App;
