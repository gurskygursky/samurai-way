import React from 'react';
import socialNetworkLogo from './../../assets/images/rocket-png.png';

export const Header = () => {
    return (
        <div style={{backgroundColor: 'green'}} className={'header'}>
            <img style={{width: '64px', height: '64px'}}
                 src={socialNetworkLogo}
                 alt={'social network logo'}
            />
            Samurai Social Network
        </div>
    );
};
