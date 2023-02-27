import React from 'react';
import avatarImage from './../../assets/images/rocket-ship-png.png';
import {ProfileResponseType} from "./../../redux/types";

type PropsType = {
    profile: ProfileResponseType;
}
export const ProfileDescription: React.FC<PropsType> = ({profile}) => {
    return (
        <div> {
            profile.photos
                ? <img style={{width: '64px', height: '64px'}}
                       src={profile.photos.large}
                       alt={'avatar logo'}
                />
                : <img style={{width: '64px', height: '64px'}}
                       src={avatarImage}
                       alt={'avatar logo'}
                />
        }
            {
                profile.userId
                    ? <span>Nickname: {profile.userId}</span>
                    : <span>Nickname:</span>
            }
        </div>
    );
};
