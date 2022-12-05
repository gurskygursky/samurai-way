import {connect} from 'react-redux';
import {Users} from './Users';
import {RootStoreType} from './../../redux/store';
import {UserPageType} from './../../redux/types';
import {Dispatch} from 'redux';
import {FollowUserAC, UnfollowUserAC} from './../../redux/reducers/users-reducer';

type mapStateToPropsType = {
    users: Array<UserPageType>;
}

type mapDispatchToPropsType = {
    follow: (userID: number) => void;
    unfollow: (userID: number) => void;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        users: state.usersReducer?.users,
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
    }
}


export type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);