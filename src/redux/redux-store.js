import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;