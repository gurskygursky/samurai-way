import React from 'react';
import {ProfileDescription} from './ProfileDescription';
import {Posts} from './Posts';

export const Profile = () => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ProfileDescription/>
            <Posts/>
        </div>
    );
};
