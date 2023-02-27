import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {
    requestIsFetching,
    followUser,
    selectPage,
    setUsers,
    unfollowUser,
    usersTotalCount, requestToFollow, getUsers, followThunk, unfollowThunk
} from './../../redux/reducers/users-reducer';
import React from "react";
import {Preloader} from "./../preloader/Preloader";
import {Users} from "./../users/Users";
import {UserResponseType} from "./../../redux/types";

type mapStateToPropsType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
    isFollowing: Array<number>;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        error: state.usersReducer.error,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching,
        isFollowing: state.usersReducer.isFollowing,
    }
}

export class UsersContainerWithRequest extends React.Component<UsersContainerPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    selectedPageNumber = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    follow = (userId: number) => {
        this.props.followThunk(userId);
    }
    unfollow = (userId: number) => {
        this.props.unfollowThunk(userId);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Users
                            follow={this.follow}
                            unfollow={this.unfollow}
                            selectedPageNumber={this.selectedPageNumber}
                            {...this.props}
                        />
                }
            </>
        );
    }
}

const ConnectComponent = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    usersTotalCount,
    selectPage,
    requestIsFetching,
    requestToFollow,
    getUsers,
    followThunk,
    unfollowThunk,
});
export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const UsersContainer = ConnectComponent(UsersContainerWithRequest);
