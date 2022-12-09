import {UserPayloadType} from './../../redux/types';
import {UserResponseType, UsersResponseType} from './../../API/users-api';

enum ACTIONS {
    SET_USERS = 'SET_USERS',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
}


const initialState: UsersResponseType = {
    users: [],
    totalCount: 10,
    error: '',
};

export const usersReducer = (state = initialState, action: UsersReducerActionsType) => {
    switch (action.type) {
        case ACTIONS.SET_USERS: {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        case ACTIONS.FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userID
                    ? {...user, isFollow: true}
                    : user)
            }
        }
        case ACTIONS.UNFOLLOW: {
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userID
                    ? {...user, isFollow: false}
                    : user)
            }
        }
        default:
            return state;
    }
}

// actions
export const SetUsersAC = (users: Array<UserResponseType>) => {
    return {
        type: ACTIONS.SET_USERS,
        payload: {users},
    } as const
}
export const FollowUserAC = (userID: number) => {
    return {
        type: ACTIONS.FOLLOW,
        payload: {
            userID,
        },
    } as const
}
export const UnfollowUserAC = (userID: number) => {
    return {
        type: ACTIONS.UNFOLLOW,
        payload: {
            userID,
        },
    } as const
}


// actions types
type SetUsersActionType = ReturnType<typeof SetUsersAC>;
type FollowUserActionType = ReturnType<typeof FollowUserAC>;
type UnfollowUserActionType = ReturnType<typeof UnfollowUserAC>;
export type UsersReducerActionsType = SetUsersActionType | FollowUserActionType | UnfollowUserActionType;