import React from 'react';
import {NavLink} from 'react-router-dom';
import {Dialog} from './Dialog';
import {Messages} from './Messages';
import {MessageType, UserType} from './../../index';

// type UserType = {
//     id: number;
//     name: string;
// }
type DialogsPropsType = {
    arrayUsers: Array<UserType>;
    arrayMessages: Array<MessageType>;
}
export const Dialogs = (props: DialogsPropsType) => {

    // const ArrayUsers: Array<UserType> = [
    //     {id: 1, name: 'Dimych'},
    //     {id: 2, name: 'Igor'},
    //     {id: 3, name: 'Katya'},
    //     {id: 4, name: 'Valera'},
    //     {id: 5, name: 'Viktor'},
    // ];

    const dialogItems = props.arrayUsers.map((user: UserType) => <Dialog name={user.name}/>);

    return (
        <div style={{backgroundColor: 'blueviolet', display: 'grid', gridTemplateColumns: '2fr 10fr'}}
             className={'content'}>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {dialogItems}
                    {/*<Dialog name={'Dymich'}/>*/}
                    {/*<Dialog name={'Igor'}/>*/}
                    {/*<Dialog name={'Katya'}/>*/}
                    {/*<Dialog name={'Valera'}/>*/}
                    {/*<Dialog name={'Viktor'}/>*/}
                    {/*<Dialog name={ArrayUsers[0].name}/>*/}
                    {/*<Dialog name={ArrayUsers[1].name}/>*/}
                    {/*<Dialog name={ArrayUsers[2].name}/>*/}
                    {/*<Dialog name={ArrayUsers[3].name}/>*/}
                    {/*<Dialog name={ArrayUsers[4].name}/>*/}
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
            <Messages arrayMessages={props.arrayMessages}/>
        </div>
    )
}