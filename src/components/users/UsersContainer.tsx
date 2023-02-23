import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {
    requestIsFetching,
    followUser,
    selectPage,
    setUsers,
    unfollowUser,
    usersTotalCount, requestToFollow
} from './../../redux/reducers/users-reducer';
import {UsersAPI} from '../../API/api';
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
        this.props.requestIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.usersTotalCount(data.totalCount);
                this.props.selectPage(this.props.currentPage);
                this.props.requestIsFetching(false);
            })
    }

    selectedPageNumber = (pageNumber: number) => {
        this.props.requestIsFetching(true);
        this.props.selectPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.requestIsFetching(false);
            })
    }
    follow = (userId: number) => {
        this.props.requestIsFetching(true);
        UsersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.followUser(userId);
                    this.props.requestToFollow(userId, true);
                    this.props.requestIsFetching(false);
                }
                this.props.requestToFollow(userId, false);

            })
    }
    unfollow = (userId: number) => {
        this.props.requestIsFetching(true);
        UsersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollowUser(userId);
                    this.props.requestToFollow(userId, true);
                    this.props.requestIsFetching(false);
                }
                this.props.requestToFollow(userId, false);
            })
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
    requestToFollow
});
export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const UsersContainer = ConnectComponent(UsersContainerWithRequest);
