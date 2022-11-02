import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import {ProfilePageType} from './../../redux/state';

export type ProfilePropsType = {
    profile: ProfilePageType;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts arrayPosts={props.profile.arrayPosts}/>
        </div>
    );
};
