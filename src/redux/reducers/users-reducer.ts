import {UserResponseType} from './../../API/users-api';

enum ACTIONS {
    SET_USERS = 'SET_USERS',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    USERS_TOTAL_COUNT = 'USERS_TOTAL_COUNT',
    SELECT_PAGE = 'SELECT_PAGE',
}

type InitialStateType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
}

const initialState: InitialStateType = {
    users: [],
    totalCount: 0,
    error: '',
    currentPage: 33,
    pageSize: 10,
};

export const usersReducer = (state = initialState, action: UsersReducerActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS.SET_USERS: {
            return {...state, users: [...action.payload.users]}
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
        case ACTIONS.USERS_TOTAL_COUNT: {
            return {
                ...state, totalCount: action.payload.totalCount
            }
        }
        case ACTIONS.SELECT_PAGE: {
            return {
                ...state, currentPage: action.payload.pageNumber
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
export const UsersTotalCountAC = (totalCount: number) => {
    return {
        type: ACTIONS.USERS_TOTAL_COUNT,
        payload: {totalCount},
    } as const
}
export const SelectPageAC = (pageNumber: number) => {
    return {
        type: ACTIONS.SELECT_PAGE,
        payload: {pageNumber},
    } as const
}


// actions types
type SetUsersActionType = ReturnType<typeof SetUsersAC>;
type FollowUserActionType = ReturnType<typeof FollowUserAC>;
type UnfollowUserActionType = ReturnType<typeof UnfollowUserAC>;
type UsersTotalCountActionType = ReturnType<typeof UsersTotalCountAC>;
type SelectPageActionType = ReturnType<typeof SelectPageAC>;

export type UsersReducerActionsType = SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | UsersTotalCountActionType
    | SelectPageActionType;