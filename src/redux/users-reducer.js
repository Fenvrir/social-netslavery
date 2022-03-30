import { subscribeAPI, usersAPI } from "../dal/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 1,
    status: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false };
                    }
                    return u;
                })
            }
        };
        case SET_USERS: {
            return { ...state, status: 1, users: [...action.users] };
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.use)]
            }
        }
        default: return state;
    };
};

export const followUserSuccess = (id) => ({ type: FOLLOW, id });
export const unfollowUserSuccess = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleIsFetching(false));
            });
    }
}

export const unFollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        subscribeAPI.unFollowUser(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUserSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        subscribeAPI.followUser(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUserSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;
