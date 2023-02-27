import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <div style={{backgroundColor: 'gold'}} className={'nav'}>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <NavLink to={'/profile'} style={{textDecoration: 'none'}}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to={'/users'} style={{textDecoration: 'none'}}>Users</NavLink>
                </li>
                <li>
                    <NavLink to={'/news'} style={{textDecoration: 'none'}}>News</NavLink>
                </li>
                <li>
                    <NavLink to={'/dialogs'} style={{textDecoration: 'none'}}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to={'/music'} style={{textDecoration: 'none'}}>Music</NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'} style={{textDecoration: 'none'}}>Settings</NavLink>
                </li>
                <li>
                    <NavLink to={'/login'} style={{textDecoration: 'none'}}>Login</NavLink>
                </li>
            </ul>
        </div>
    );
};
