import React from 'react';
import {NavLink} from 'react-router-dom';
import { Dialog } from './Dialog';
import { Messages } from './Messages';

type UserType = {
    id: number;
    name: string;
}

export const Dialogs = () => {

    const ArrayUsers: Array<UserType> = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Igor'},
        {id: 3, name: 'Katya'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Viktor'},
    ];

    return (
        <div style={{backgroundColor: 'blueviolet', display: 'grid', gridTemplateColumns: '2fr 10fr'}}
             className={'content'}>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {ArrayUsers.map((user: UserType) => <Dialog name={user.name}/> )}
                    {/*<Dialog name={'Dymich'}/>*/}
                    {/*<Dialog name={'Igor'}/>*/}
                    {/*<Dialog name={'Katya'}/>*/}
                    {/*<Dialog name={'Valera'}/>*/}
                    {/*<Dialog name={'Viktor'}/>*/}
                    {/*<li>*/}
                    {/*    <NavLink to={'/messages/dimych'}*/}
                    {/*             style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Dimych</NavLink>*/}
                    {/*</li>*/}
                    {/*<li style={{listStyle: 'none'}}>*/}
                    {/*    <NavLink to={'/messages/igor'}*/}
                    {/*             style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Igor</NavLink>*/}
                    {/*</li>*/}
                    {/*<li style={{listStyle: 'none'}}>*/}
                    {/*    <NavLink to={'/messages/katya'}*/}
                    {/*             style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Katya</NavLink>*/}
                    {/*</li>*/}
                    {/*<li style={{listStyle: 'none'}}>*/}
                    {/*    <NavLink to={'/messages/valera'}*/}
                    {/*             style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Valera</NavLink>*/}
                    {/*</li>*/}
                    {/*<li style={{listStyle: 'none'}}>*/}
                    {/*    <NavLink to={'/messages/viktor'}*/}
                    {/*             style={{textDecoration: 'none', cursor: 'pointer', color: 'black'}}>Viktor</NavLink>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <Messages/>
        </div>
    )
}