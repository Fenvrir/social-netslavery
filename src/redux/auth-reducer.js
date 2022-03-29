import { authAPI } from "../dal/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_USER_PHOTO = 'SET_USER_PHOTO';
const LOGIN_USER = "LOGIN_USER";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_USER_PHOTO: 
            return {
                ...state,
                photo: action.photo
            }
        case LOGIN_USER:
            return {
                ...state,
                login: action.login
            }        
        default:
            return state;
    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login} });
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo });
export const loginUser = (login, password, rememberMe) => ({type: LOGIN_USER, login: {login, password, rememberMe} });

export const setUserAuthData = () => {
    return (dispatch) => {
        authAPI.setUserAuthData()
		.then((data) => {
			if(data.resultCode === 0){
				let {id, email, login} = data.data;
				dispatch(setUserData(id, email, login));
			}
		});
			
    }
}
export default authReducer;