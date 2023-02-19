import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {Dispatch} from 'redux';
import {
    requestIsFetching,
    followUser,
    selectPage,
    setUsers,
    unfollowUser,
    usersTotalCount
} from './../../redux/reducers/users-reducer';
import {UserResponseType} from './../../API/users-api';
import {UsersContainerWithRequest} from './UsersContainerWithRequest';

type mapStateToPropsType = {
    users: Array<UserResponseType>;
    totalCount: number;
    error: string;
    currentPage: number;
    pageSize: number;
    isFetching: boolean;
}

// type mapDispatchToPropsType = {
//     follow: (userID: number) => void;
//     unfollow: (userID: number) => void;
//     setUsers: (users: Array<UserResponseType>) => void;
//     selectPage: (pageNumber: number) => void;
//     usersTotalCount: (totalCount: number) => void;
//     requestIsFetching: (isFetching: boolean) => void;
// }

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        users: state.usersReducer.users,
        totalCount: state.usersReducer.totalCount,
        error: state.usersReducer.error,
        currentPage: state.usersReducer.currentPage,
        pageSize: state.usersReducer.pageSize,
        isFetching: state.usersReducer.isFetching,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(FollowUserAC(userID))
//         },
//         unfollow: (userID: number) => {
//             dispatch(UnfollowUserAC(userID))
//         },
//         setUsers: (users: Array<UserResponseType>) => {
//             dispatch(SetUsersAC(users))
//         },
//         usersTotalCount: (totalCount: number) => {
//             dispatch(UsersTotalCountAC(totalCount))
//         },
//         selectPage: (pageNumber: number) => {
//             dispatch(SelectPageAC(pageNumber))
//         },
//         requestIsFetching: (isFetching: boolean) => {
//             dispatch(IsFetchingAC(isFetching));
//         },
//     }
// }
// export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerWithRequest);

// export const UsersContainer = connect(mapStateToProps, {
//     followUser,
//     unfollowUser,
//     setUsers,
//     usersTotalCount,
//     selectPage,
//     requestIsFetching
// })(UsersContainerWithRequest);



const ConnectComponent = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    usersTotalCount,
    selectPage,
    requestIsFetching
})
export type UsersContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const UsersContainer = ConnectComponent(UsersContainerWithRequest)