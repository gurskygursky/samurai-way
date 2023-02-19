import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {PostsContainer} from 'src/components/profile/posts/PostsContainter';
import {ProfileResponseType} from "./../../redux/types";

type PropsType = {
    profile: ProfileResponseType;
}
export const Profile: React.FC<PropsType> = ({profile}) => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription profile={profile}/>
            <PostsContainer/>
        </div>
    );
};
