import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileSettings from "./components/ProfileSettings/ProfileSettings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar state={props.store} />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="profile"
              element={<Profile store={props.store}/>}/>
            <Route
              path="dialogs/*"
              element={<DialogsContainer store={props.store}/>}/>
            <Route path="music" element={<Music />} />
            <Route path="news" element={<News />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route
              path="friends"
              element={<FriendsContainer />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
