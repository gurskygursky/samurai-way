import {ProfileResponseType} from 'src/redux/types';
import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {
    getUserProfile,
    getUserStatusThunk,
    setUserProfile, setUserStatusThunk,
} from "./../../redux/reducers/profile-reducer";
import {requestIsFetching} from "./../../redux/reducers/users-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {Preloader} from "./../preloader/Preloader";
import {Profile} from "./../profile/Profile";
import {WithAuthRedirect} from "./../../hoc/WithAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    profile: ProfileResponseType;
    isFetching: boolean;
    isAuth: boolean;
    status: string;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        profile: state.ProfileReducer.profile,
        isFetching: state.usersReducer.isFetching,
        isAuth: state.authReducer.isAuth,
        status: state.ProfileReducer.status,
    }
}

export class ProfileContainerWithRequest extends React.Component<ProfileContainerPropsType, any> {
    refreshProfile() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(18933);
        }

        this.props.getUserProfile(+userId);
        this.props.getUserStatusThunk(+userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    // componentDidUpdate(prevProps: any) {
    //     if (this.props.match.params.userId !== prevProps.match.params.userId) {
    //         this.refreshProfile()
    //     }
    // }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Profile profile={this.props.profile} status={this.props.status} userId={this.props.profile.userId}/>
                }
            </>
        )
    }
}

const ConnectComponent = connect(mapStateToProps, {
    setUserProfile,
    requestIsFetching,
    getUserProfile,
    getUserStatusThunk,
})

export type PathParamType = {
    userId: string;
}

// const WithRouterUrlDataProfileContainer = withRouter(ProfileContainerWithRequest);
// export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
// export const ProfileContainer = WithAuthRedirect(ConnectComponent(WithRouterUrlDataProfileContainer));

export const ProfileContainer = compose<ComponentType>(
    ConnectComponent,
    // WithAuthRedirect,
    withRouter,
)(ProfileContainerWithRequest);