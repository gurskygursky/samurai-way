import {connect} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {Dispatch} from 'redux';
import {
    FollowUserAC,
    SelectPageAC,
    SetUsersAC,
    UnfollowUserAC,
    UsersTotalCountAC
} from './../../redux/reducers/users-reducer';
import {UserResponseType} from './../../API/users-api';
import { Users } from './Users';

type mapStateToPropsType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
    setUsers: (users: Array<UserResponseType>) => void;
    selectPage: (pageNumber: number) => void;
    usersTotalCount: (totalCount: number) => void;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        error: state.usersReducer.error,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(FollowUserAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(UnfollowUserAC(userID))
        },
        setUsers: (users: Array<UserResponseType>) => {
            dispatch(SetUsersAC(users))
        },
        usersTotalCount: (totalCount: number) => {
            dispatch(UsersTotalCountAC(totalCount))
        },
        selectPage: (pageNumber: number) => {
            dispatch(SelectPageAC(pageNumber))
        },
    }
}

export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
