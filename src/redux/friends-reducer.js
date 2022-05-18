import { friendsAPI } from "../dal/api";

const SET_FRIENDS = 'SET_FRIENDS';

let initialState = {
    friends: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return { ...state, friends: [...action.friendsList] };
        }

        default: return state;
    }
};

export const setFriends = (friendsList) => ({ type: SET_FRIENDS, friendsList })


export const getFriends = () => {
    return async (dispatch) => {
        const resp = await friendsAPI.getFriends();
        dispatch(setFriends(resp));
    }
}


export default friendsReducer;