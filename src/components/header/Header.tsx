import React from 'react';
import socialNetworkLogo from './../../assets/images/rocket-png.png';
import {SignInContainer} from "./../login/SignInContainer";

export const Header = () => {
    return (
        <div style={{backgroundColor: 'green', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}} className={'header'}>
            <div style={{}}>
                <img style={{width: '64px', height: '64px'}}
                     src={socialNetworkLogo}
                     alt={'social network logo'}
                />
                Samurai Social Network
            </div>
                {/*<SignInContainer/>*/}
        </div>
    );
};
