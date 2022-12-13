import {connect} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {UserPayloadType} from './../../redux/types';
import {Dispatch} from 'redux';
import {
    FollowUserAC,
    SelectPageAC,
    SetUsersAC,
    UnfollowUserAC,
    UsersTotalCountAC
} from './../../redux/reducers/users-reducer';
import {instance, UserResponseType, UsersResponseType} from './../../API/users-api';
import React from 'react';
import avatar_male_user from './assets/images/avatar_male_user.png';
import { Users } from './Users';

// export class ClassUsersContainer extends React.Component<UsersContainerPropsType, any>{
//
//     // componentDidMount() {
//     //     instance.get(`users`)
//     //         .then(res => this.props.setUsers(res.data.items));
//     // }
//
//     componentDidMount() {
//         instance.get(`users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(res => {
//                 this.props.setUsers(res.data.items)
//                 this.props.usersTotalCount(res.data.totalCount)
//                 // this.props.selectPage(res.data.currentPage)
//             })
//     }
//
//     render() {
//         return (
//             <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
//                 <Users {...this.props} />
//             </div>
//         );
//     }
// }

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