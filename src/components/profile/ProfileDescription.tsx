import React from 'react';
import avatarImage from './../../assets/images/rocket-ship-png.png';

export const ProfileDescription = () => {
    return (
        <div>
            <img style={{width: '64px', height: '64px'}}
                 src={avatarImage}
                 alt={'avatar logo'}
            />
            <span>Nickname:</span>
        </div>
    );
};
