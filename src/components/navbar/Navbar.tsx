import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{backgroundColor: 'gold'}} className={'nav'}>
            <ul style={{listStyle: 'none'}}>
                <li>
                    {/*<a href={'/profile'}>Profile</a>*/}
                    <NavLink to={'/profile'} style={{textDecoration: 'none'}}>Profile</NavLink>
                </li>
                <li>
                    {/*<a href={'/news'}>News</a>*/}
                    <NavLink to={'/news'} style={{textDecoration: 'none'}}>News</NavLink>
                </li>
                <li>
                    {/*<a href={'/messages'}>Messages</a>*/}
                    <NavLink to={'/dialogs'} style={{textDecoration: 'none'}}>Messages</NavLink>

                </li>
                <li>
                    {/*<a href={'/music'}>Music</a>*/}
                    <NavLink to={'/music'} style={{textDecoration: 'none'}}>Music</NavLink>

                </li>
                <li>
                    {/*<a href={'/settings'}>Settings</a>*/}
                    <NavLink to={'/settings'} style={{textDecoration: 'none'}}>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};
