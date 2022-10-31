import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogPropsType = {
    name: string;
}
export const Dialog = (props: DialogPropsType) => {

    const pathToProfile = '/dialog/' + props.name.toLowerCase();

    return (
        <li style={{listStyle: 'none'}}>
            <NavLink to={pathToProfile}
                     style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>{props.name}</NavLink>
        </li>
    );
}