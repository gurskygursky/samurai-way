import {ProfilePageType} from 'src/redux/types';
import {connect} from 'react-redux';
import {RootStoreType} from './../../redux/store';
import {Profile} from './../../components/profile/Profile';

type mapStateToPropsType = {
    profile: ProfilePageType;
}

export type ProfileContainerType = mapStateToPropsType;

const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        profile: state.ProfileReducer
    }
}

export const ProfileContainer = connect(mapStateToProps)(Profile);
