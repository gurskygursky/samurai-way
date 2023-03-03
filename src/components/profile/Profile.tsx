import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {PostsContainer} from 'src/components/profile/posts/PostsContainter';
import {ProfileResponseType} from "./../../redux/types";
import {Preloader} from "./../../components/preloader/Preloader";

type PropsType = {
    profile: ProfileResponseType;
    status: string;
    userId: number;
}
export const Profile: React.FC<PropsType> = ({profile, status, userId}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription profile={profile} status={status} userId={userId}/>
            <PostsContainer/>
        </div>
    );
};
