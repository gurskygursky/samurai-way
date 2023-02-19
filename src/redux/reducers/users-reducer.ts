import {UserResponseType} from './../../API/users-api';

enum ACTIONS {
    SET_USERS = 'SET_USERS',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    USERS_TOTAL_COUNT = 'USERS_TOTAL_COUNT',
    SELECT_PAGE = 'SELECT_PAGE',
    REQUEST_IS_FETCHING = 'REQUEST_IS_FETCHING'
}

type InitialStateType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
}

const initialState: InitialStateType = {
    users: [],
    totalCount: 0,
    error: '',
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
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
        case ACTIONS.REQUEST_IS_FETCHING: {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        default:
            return state;
    }
}

// actions
export const setUsers = (users: Array<UserResponseType>) => {
    return {
        type: ACTIONS.SET_USERS,
        payload: {users},
    } as const
}
export const followUser = (userID: number) => {
    return {
        type: ACTIONS.FOLLOW,
        payload: {
            userID,
        },
    } as const
}
export const unfollowUser = (userID: number) => {
    return {
        type: ACTIONS.UNFOLLOW,
        payload: {
            userID,
        },
    } as const
}
export const usersTotalCount = (totalCount: number) => {
    return {
        type: ACTIONS.USERS_TOTAL_COUNT,
        payload: {totalCount},
    } as const
}
export const selectPage = (pageNumber: number) => {
    return {
        type: ACTIONS.SELECT_PAGE,
        payload: {pageNumber},
    } as const
}
export const requestIsFetching = (isFetching: boolean) => {
    return {
        type: ACTIONS.REQUEST_IS_FETCHING,
        payload: {isFetching}
    } as const
}


// actions types
type SetUsersActionType = ReturnType<typeof setUsers>;
type FollowUserActionType = ReturnType<typeof followUser>;
type UnfollowUserActionType = ReturnType<typeof unfollowUser>;
type UsersTotalCountActionType = ReturnType<typeof usersTotalCount>;
type SelectPageActionType = ReturnType<typeof selectPage>;
type FetchingActionType = ReturnType<typeof requestIsFetching>;

export type UsersReducerActionsType = SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | UsersTotalCountActionType
    | SelectPageActionType
    | FetchingActionType;