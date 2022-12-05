import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {PostsContainer} from 'src/components/profile/posts/PostsContainter';

export const Profile = () => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <PostsContainer/>
        </div>
    );
};
