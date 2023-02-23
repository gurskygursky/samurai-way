import React from 'react';
import {UsersContainerPropsType} from './UsersContainer';
import {instance, UsersAPI} from '../../API/api';
import {Users} from "./Users";
import {Preloader} from './../preloader/Preloader';

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
        // instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        //     .then(res => {
        //         this.props.setUsers(res.data.items)
        //         this.props.usersTotalCount(res.data.totalCount)
        //         this.props.selectPage(this.props.currentPage)
        //         this.props.requestIsFetching(false)
        //     })
    }

    selectedPageNumber = (pageNumber: number) => {
        this.props.requestIsFetching(true);
        this.props.selectPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.requestIsFetching(false);
            })
        // instance.get(`users?page=${pageNumber}&count=${this.props.pageSize}`)
        //     .then(res => {
        //         this.props.setUsers(res.data.items)
        //         this.props.requestIsFetching(false);
        //     })
    }
    follow = (userId: number) => {
        this.props.requestIsFetching(true);
        UsersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.followUser(userId);
                    this.props.requestIsFetching(false);
                }
            })
        // instance.post(`follow/${userId}`)
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             this.props.followUser(userId);
        //             this.props.requestIsFetching(false);
        //         }
        //     })
    }
    unfollow = (userId: number) => {
        this.props.requestIsFetching(true);
        UsersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {

                    this.props.unfollowUser(userId);
                    this.props.requestIsFetching(false);
                }
            })
        // instance.delete(`follow/${userId}`)
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //
        //             this.props.unfollowUser(userId);
        //             this.props.requestIsFetching(false);
        //         }
        //     })
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
