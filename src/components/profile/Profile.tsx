import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import {ProfilePageType} from './../../redux/state';
import {ActionsType} from './../../redux/store';

export type ProfilePropsType = {
    profile: ProfilePageType;
    // addPost: (postText: string | undefined) => void;
    // addPost: (postText: string) => void;
    postText: string;
    // updatePostHandler: (newPostText: string) => void;
    dispatch: (action: ActionsType) => void;
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts arrayPosts={props.profile.arrayPosts}
                   dispatch={props.dispatch}
                   // addPost={props.addPost}
                   postText={props.postText}
                   // updatePostHandler={props.updatePostHandler}
            />
        </div>
    );
};
