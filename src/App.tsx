import React from 'react';
import './App.css';
import socialNetworkLogo from './assets/images/rocket-png.png';

export const App = () => {
    return (
        <div className={'appWrapper'}>
            <div style={{backgroundColor: 'green'}} className={'header'}>
                <img style={{width: '64px', height: '64px'}} src={socialNetworkLogo}/>
                Samurai Social Network
            </div>
            <div style={{backgroundColor: 'gold'}} className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>News</a></div>
                <div><a>Messages</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </div>
            <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
                <div>
                    avatar + description
                </div>
                <div>
                    My Posts
                    <div>
                        add post
                    </div>
                    <div>
                        first post
                    </div>
                    <div>
                        second post
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: 'deeppink'}} className={'footer'}>info</div>
        </div>

    );
}
