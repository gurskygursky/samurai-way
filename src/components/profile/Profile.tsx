import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import { PostType } from './../../index';

export type ProfilePropsType = {
    arrayPosts: Array<PostType>;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts arrayPosts={props.arrayPosts}/>
        </div>
    );
};
