import {ProfilePageType, ProfileResponseType, UserResponseType} from 'src/redux/types';
import {Dispatch} from "redux";
import {UsersAPI} from "./../../API/api";
import {requestIsFetching} from './users-reducer';

enum ACTIONS {
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    GET_USER_STATUS = 'GET_USER_STATUS',
    SET_USER_STATUS = 'SET_USER_STATUS',
}

const initialState: ProfilePageType = {
    arrayPosts: [
        {id: 1, postText: `It's my first post`, likesCount: 888},
        {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
        {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
        {id: 4, postText: `YO!`, likesCount: 333},
    ],
    profile: {} as ProfileResponseType,
    user: {} as UserResponseType,
}

export const ProfileReducer = (state = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ACTIONS.ADD_POST: {
            return {
                ...state,
                arrayPosts: [...state.arrayPosts, {
                    id: new Date().getTime(),
                    postText: action.payload.postText,
                    likesCount: new Date().getDay()
                }]
            }
        }
        case ACTIONS.SET_USER_PROFILE: {
            return {
                ...state, profile: action.payload.profile
            }
        }
        // case ACTIONS.GET_USER_STATUS: {
        //     return {
        //         ...state, status: action.payload.status
        //     }
        // }
        case ACTIONS.SET_USER_STATUS: {
            return {
                ...state, status: action.payload.status
            }
        }
        default:
            return state;
    }
}

// actions
export const AddPostActionCreator = (postText: string) => {
    return {
        type: ACTIONS.ADD_POST,
        payload: {postText},
    } as const
}
export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: ACTIONS.SET_USER_PROFILE,
        payload: {profile},
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: ACTIONS.SET_USER_STATUS,
        payload: {status},
    } as const
}
// export const getUserStatus = (status: string) => {
//     return {
//         type: ACTIONS.SET_USER_STATUS,
//         payload: {status},
//     } as const
// }

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.selectUserProfile(userId)
            .then((data: ProfileResponseType) => {
                dispatch(setUserProfile(data));
                dispatch(requestIsFetching(false));
            });
    }
}
export const getUserStatusThunk = (userId: string) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.getUserStatus(+userId)
            .then((data: any) => {
                dispatch(setUserStatus(data.status));
                dispatch(requestIsFetching(false));
            });
    }
}

export const setUserStatusThunk = (status: string) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.setUserStatus(status)
            .then((data: any) => {
                if (data.resultCode === 0) {
                    dispatch(setUserStatus(status));
                    dispatch(requestIsFetching(false));
                }
            });
    }
}


// actions types
type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
type SetUserStatusActionType = ReturnType<typeof setUserStatus>;
export type ProfileActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | SetUserStatusActionType;