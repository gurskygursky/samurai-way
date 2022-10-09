import React from 'react';

export const Navbar = () => {
    return (
        <div style={{backgroundColor: 'gold'}} className={'nav'}>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <a href={'/profile'}>Profile</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/news'}>News</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/messages'}>Messages</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/music'}>Music</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/settings'}>Settings</a>
                </li>
            </ul>
        </div>
    );
};
