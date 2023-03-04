import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {PostsContainer} from 'src/components/profile/posts/PostsContainter';
import {ProfileResponseType} from "./../../redux/types";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile: ProfileResponseType;
    status: string;
    isAuth: boolean;
}
export const Profile: React.FC<PropsType> = ({isAuth, profile, status}) => {
    //
    // if (!isAuth) {
    //     return <Redirect to={'/login'}/>
    // }

    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription profile={profile} status={status} isAuth={isAuth}/>
            <PostsContainer/>
        </div>
    );
};
