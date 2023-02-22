import {ProfileResponseType} from 'src/redux/types';
import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {setUserProfile} from "./../../redux/reducers/profile-reducer";
import {ProfileContainerWithRequest} from "./ProfileContainerWithRequest";
import {requestIsFetching} from "./../../redux/reducers/users-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import React from 'react';

type mapStateToPropsType = {
    profile: ProfileResponseType;
    isFetching: boolean;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        profile: state.ProfileReducer.profile,
        isFetching: state.usersReducer.isFetching,
    }
}

const ConnectComponent = connect(mapStateToProps, {
    setUserProfile,
    requestIsFetching
})

export type PathParamType = {
    userId: string;
}

const WithRouterUrlDataProfileContainer = withRouter(ProfileContainerWithRequest);
// export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
export const ProfileContainer = ConnectComponent(WithRouterUrlDataProfileContainer);

// export const ProfileContainer = compose<ComponentType>(
//     ConnectComponent,
//     // withAuthRedirect,
//     withRouter,
// )(ProfileContainerWithRequest);