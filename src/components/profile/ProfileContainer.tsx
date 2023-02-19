import {ProfilePageType, ProfileResponseType} from 'src/redux/types';
import {connect, ConnectedProps} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {Profile} from './../../components/profile/Profile';

import {setUserProfile} from "./../../redux/reducers/profile-reducer";
import {ProfileContainerWithRequest} from "./ProfileContainerWithRequest";
import {requestIsFetching} from "./../../redux/reducers/users-reducer";

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
export type ProfileContainerPropsType = ConnectedProps<typeof ConnectComponent>
export const ProfileContainer = ConnectComponent(ProfileContainerWithRequest)