import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import {ProfilePageType, ActionsType} from './../../redux/store';

export type ProfilePropsType = {
    profile: ProfilePageType;
    postText: string;
    dispatch: (action: ActionsType) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts arrayPosts={props.profile.arrayPosts}
                   dispatch={props.dispatch}
                   postText={props.postText}
            />
        </div>
    );
};
