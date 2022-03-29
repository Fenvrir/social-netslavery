import { profileAPI } from "../dal/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts:
        [{ id: 1, message: 'Hello', likesCount: 22, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        { id: 2, message: 'How are you?', likesCount: 14, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        ],
    profile: null,
    status: 'Мой статус'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            // if (action.newPostText === undefined) { return state; }
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
                avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})    


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
    });
    }
}

export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});    
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
            .then((response) => {
                dispatch(setUserStatus(response.data));
            })
    }
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}

export default profileReducer;