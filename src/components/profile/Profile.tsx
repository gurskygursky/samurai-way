import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import {ProfilePageType} from './../../redux/state';

export type ProfilePropsType = {
    profile: ProfilePageType;
    // addPost: (postText: string | undefined) => void;
    addPost: (postText: string) => void;
    postText: string;
    updatePostHandler: (newPostText: string) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts arrayPosts={props.profile.arrayPosts} addPost={props.addPost} postText={props.postText}
                   updatePostHandler={props.updatePostHandler}/>
        </div>
    );
};
