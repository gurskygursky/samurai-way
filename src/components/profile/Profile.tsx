import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
// import { PostType } from './../../index';
import {ProfilePageType} from './../../redux/state';

export type ProfilePropsType = {
    profile: ProfilePageType;
    // arrayPosts: Array<PostType>;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            {/*<Posts arrayPosts={props.arrayPosts}/>*/}
            <Posts arrayPosts={props.profile.arrayPosts}/>
        </div>
    );
};
