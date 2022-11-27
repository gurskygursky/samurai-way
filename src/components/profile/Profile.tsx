import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';
import {ProfilePageType, ActionsType} from 'src/redux/my-first-store';
import {PostsContainer} from './../../components/profile/PostsContainter';
import {ProfileContainerType} from './../../components/profile/ProfileContainer';

export type ProfilePropsType = {
    profile: ProfilePageType;
    // postText: string;
    dispatch: (action: ActionsType) => void;
}

export const Profile = (props: ProfileContainerType) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            {/*<Posts arrayPosts={props.profile.arrayPosts}*/}
            {/*       dispatch={props.dispatch}*/}
            {/*       postText={props.postText}*/}
            {/*/>*/}
            <PostsContainer/>
            {/*<PostsContainer profile={props.profile} dispatch={props.dispatch}/>*/}
        </div>
    );
};
