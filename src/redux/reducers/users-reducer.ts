import {UsersPageType} from './../../redux/types';
import avatar_male_user from './../../assets/images/avatar_male_user.png'

enum ACTIONS {
    SET_USERS = 'SET_USERS',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
}


const initialState: UsersPageType = {
    users: [
        {
            id: 1, photos: avatar_male_user, fullName: 'Dimych', isFollow: false,
            location: {
                country: 'Belarus',
                city: 'Minsk',
            }
        },
        {
            id: 2, photos: avatar_male_user, fullName: 'Meow', isFollow: false,
            location: {
                country: 'Belarus',
                city: 'Minsk',
            }
        },
        {
            id: 3, photos: avatar_male_user, fullName: 'MeowMeow', isFollow: false,
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
        },
        {
            id: 4, photos: avatar_male_user, fullName: 'Petya', isFollow: false,
            location: {
                country: 'Belarus',
                city: 'Minsk',
            },
        }
    ],
}

export const usersReducer = (state = initialState, action: UsersReducerActionsType) => {
    switch (action.type) {
        case ACTIONS.SET_USERS: {
            return {...state}
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
export const SetUsersAC = (users: UsersPageType) => {
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