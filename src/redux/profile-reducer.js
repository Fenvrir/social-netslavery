import { profileAPI } from "../dal/api";
import { stopSubmit } from 'redux-form'

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SET_USER_PHOTO = "SET_USER_PHOTO";

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
            return { ...state, profile: action.profile };
        }
        case SET_USER_STATUS: {
            return { ...state, status: action.status };
        }
        case SET_USER_PHOTO: {
            return { ...state, profile: { ...state.profile, photos: action.photos } };
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SET_USER_PHOTO, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}


export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId)

    dispatch(setUserStatus(response.data));

}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));

    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        let wrongField = response.data.messages[0]
            .slice(response.data.messages[0].indexOf(">") + 1,
                response.data.messages.indexOf(")")).toLowerCase();
        dispatch(stopSubmit('edit-profile', { 'contacts': { [wrongField]: response.data.messages[0] } }))
        return Promise.reject(response.data.messages[0]);
    }
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)

    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;