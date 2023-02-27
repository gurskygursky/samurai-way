import {ProfileResponseType} from 'src/redux/types';
import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {getUserProfile, setUserProfile} from "./../../redux/reducers/profile-reducer";
import {requestIsFetching} from "./../../redux/reducers/users-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import React from 'react';
import {Preloader} from "./../preloader/Preloader";
import {Profile} from "./../profile/Profile";
import {WithAuthRedirect} from "./../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    profile: ProfileResponseType;
    isFetching: boolean;
    isAuth: boolean;
}

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        profile: state.ProfileReducer.profile,
        isFetching: state.usersReducer.isFetching,
        isAuth: state.authReducer.isAuth,
    }
}

export class ProfileContainerWithRequest extends React.Component<ProfileContainerPropsType, any> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = String(18933);
        }

        this.props.getUserProfile(userId);
    }

    render() {

        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Profile profile={this.props.profile}/>
                }
            </>
        )
    }
}

const ConnectComponent = connect(mapStateToProps, {
    setUserProfile,
    requestIsFetching,
    getUserProfile,
})

export type PathParamType = {
    userId: string;
}

const WithRouterUrlDataProfileContainer = withRouter(ProfileContainerWithRequest);
// export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent> & RouteComponentProps<PathParamType>;
export const ProfileContainer = WithAuthRedirect(ConnectComponent(WithRouterUrlDataProfileContainer));

// export const ProfileContainer = compose<ComponentType>(
//     ConnectComponent,
//     // withAuthRedirect,
//     withRouter,
// )(ProfileContainerWithRequest);