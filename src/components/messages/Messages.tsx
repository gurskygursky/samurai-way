import React from 'react';

export const Messages = () => {
    return (
        <div style={{backgroundColor: 'blueviolet'}} className={'content'}>
            <ul style={{listStyle: 'none'}}>
                <li>
                    <a href={'/dimych'}>Dimych</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/igor'}>Igor</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/katya'}>Katya</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/valera'}>Valera</a>
                </li>
                <li style={{listStyle: 'none'}}>
                    <a href={'/viktor'}>Viktor</a>
                </li>
            </ul>
        </div>
    )
}