import {FollowingUserType, GetUsersResponseType, UserResponseType} from "./../../redux/types";
import {UsersAPI} from "./../../API/api";
import {Dispatch} from "redux";

enum ACTIONS {
    SET_USERS = 'SET_USERS',
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    USERS_TOTAL_COUNT = 'USERS_TOTAL_COUNT',
    SELECT_PAGE = 'SELECT_PAGE',
    REQUEST_IS_FETCHING = 'REQUEST_IS_FETCHING',
    REQUEST_TO_FOLLOW_IS_FETCHING = 'REQUEST_TO_FOLLOW_IS_FETCHING',
    ERROR = 'ERROR',
}

type InitialStateType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
    isFollowing: Array<number>;
}

const initialState: InitialStateType = {
    users: [] as UserResponseType[],
    totalCount: 0,
    error: '',
    currentPage: 1,
    pageSize: 10,
    isFetching: false,
    isFollowing: [],
};

export const usersReducer = (state = initialState, action: UsersReducerActionsType): InitialStateType => {
    switch (action.type) {
        case ACTIONS.SET_USERS: {
            return {...state, users: action.payload.users}
        }
        case ACTIONS.FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: action.payload.follow}
                    : user)
            }
        }
        case ACTIONS.UNFOLLOW: {
            return {
                ...state, users: state.users.map(user => user.id === action.payload.userId
                    ? {...user, followed: action.payload.follow}
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
        case ACTIONS.REQUEST_TO_FOLLOW_IS_FETCHING: {
            return {
                ...state, isFollowing: action.payload.isFetching
                    ? [...state.isFollowing, action.payload.userId]
                    : state.isFollowing.filter(id => id !== action.payload.userId)
            }
        }
        case ACTIONS.ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default:
            return state;
    }
}

//thunk
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize)
            .then((data: GetUsersResponseType) => {
                dispatch(setUsers(data.items));
                dispatch(usersTotalCount(data.totalCount));
                dispatch(selectPage(currentPage));
                dispatch(requestIsFetching(false));
            });
    };
}

export const followThunk = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.followUser(userId)
            .then((data: FollowingUserType) => {
                if (data.resultCode === 0) {
                    dispatch(followUser(userId, true));
                    dispatch(requestToFollow(userId, true));
                    dispatch(requestIsFetching(false));
                }
                if (data.resultCode === 1) {
                    dispatch(errorHandler(data.messages[0]))
                }
                dispatch(requestToFollow(userId, false));

            });
    };
}
export const unfollowThunk = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(requestIsFetching(true));
        UsersAPI.unfollowUser(userId)
            .then((data: FollowingUserType) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowUser(userId, false));
                    dispatch(requestToFollow(userId, true));
                    dispatch(requestIsFetching(false));
                }
                if (data.resultCode === 1) {
                    dispatch(errorHandler(data.messages[0]))
                }
                dispatch(requestToFollow(userId, false));
            });
    };
}

// actions
export const setUsers = (users: Array<UserResponseType>) => {
    return {
        type: ACTIONS.SET_USERS,
        payload: {users},
    } as const
}
export const followUser = (userId: number, follow: boolean) => {
    return {
        type: ACTIONS.FOLLOW,
        payload: {
            userId, follow
        },
    } as const
}
export const unfollowUser = (userId: number, follow: boolean) => {
    return {
        type: ACTIONS.UNFOLLOW,
        payload: {
            userId, follow,
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
export const requestToFollow = (userId: number, isFetching: boolean) => {
    return {
        type: ACTIONS.REQUEST_TO_FOLLOW_IS_FETCHING,
        payload: {userId, isFetching}
    } as const
}
export const errorHandler = (error: string) => {
    return {
        type: ACTIONS.ERROR,
        payload: {error}
    } as const
}


// actions types
type SetUsersActionType = ReturnType<typeof setUsers>;
type FollowUserActionType = ReturnType<typeof followUser>;
type UnfollowUserActionType = ReturnType<typeof unfollowUser>;
type UsersTotalCountActionType = ReturnType<typeof usersTotalCount>;
type SelectPageActionType = ReturnType<typeof selectPage>;
type FetchingActionType = ReturnType<typeof requestIsFetching>;
type FollowingActionType = ReturnType<typeof requestToFollow>;
type ErrorHandlerType = ReturnType<typeof errorHandler>;

export type UsersReducerActionsType = SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | UsersTotalCountActionType
    | SelectPageActionType
    | FetchingActionType
    | FollowingActionType
    | ErrorHandlerType;