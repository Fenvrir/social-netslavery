import { profileAPI } from "../dal/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts:
        [{ id: 1, message: 'Hello', likesCount: 22, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        { id: 2, message: 'How are you?', likesCount: 14, avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" },
        ],
    newPostText: '',
    profile: null,
    status: 'Мой статус'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.newPostText === '') { return state; }
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                avatar: "https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        };
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.text };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})    


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
    });
    }
}

export default profileReducer;