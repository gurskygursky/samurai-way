import React from 'react';
import {NavLink} from 'react-router-dom';

export const Messages = () => {
    return (
        <div style={{backgroundColor: 'blueviolet', display: 'grid', gridTemplateColumns: '2fr 10fr'}}
             className={'content'}>
            <div>
                <ul style={{listStyle: 'none'}}>
                    <li>
                        <NavLink to={'/dimych'} style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Dimych</NavLink>
                    </li>
                    <li style={{listStyle: 'none'}}>
                        <NavLink to={'/igor'} style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Igor</NavLink>
                    </li>
                    <li style={{listStyle: 'none'}}>
                        <NavLink to={'/katya'} style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Katya</NavLink>
                    </li>
                    <li style={{listStyle: 'none'}}>
                        <NavLink to={'/valera'} style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Valera</NavLink>
                    </li>
                    <li style={{listStyle: 'none'}}>
                        <NavLink to={'/viktor'} style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Viktor</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <ul style={{listStyle: 'none'}}>
                    <li>Hi!</li>
                    <li>How are you?</li>
                    <li>Hello, IT-INC!</li>
                </ul>
                <textarea placeholder={'Enter your message'}/>
            </div>
        </div>
    )
}