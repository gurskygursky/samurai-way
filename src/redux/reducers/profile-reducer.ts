import {ProfilePageType, ProfileResponseType} from 'src/redux/types';
import {Dispatch} from "redux";
import {UsersAPI} from "./../../API/api";
import { requestIsFetching } from './users-reducer';

enum ACTIONS {
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
}

const initialState: ProfilePageType = {
    arrayPosts: [
        {id: 1, postText: `It's my first post`, likesCount: 888},
        {id: 2, postText: `Hello, IT-INCUBATOR!`, likesCount: 777},
        {id: 3, postText: `React - kabzda kak prosto!`, likesCount: 100500},
        {id: 4, postText: `YO!`, likesCount: 333},
    ],
    profile: {} as ProfileResponseType,
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
export const setUserProfile = (profile: ProfileResponseType ) => {
    return {
        type: ACTIONS.SET_USER_PROFILE,
        payload: {profile},
    } as const
}

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

// actions types
type AddPostActionType = ReturnType<typeof AddPostActionCreator>;
type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
export type ProfileActionsType = AddPostActionType | SetUserProfileActionType;