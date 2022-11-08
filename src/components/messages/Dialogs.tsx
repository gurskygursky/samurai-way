import React from 'react';
import {Dialog} from './Dialog';
import {Messages} from './Messages';
import {ActionsType, DialogsPageType, UserType} from './../../redux/store';

type DialogsPropsType = {
    dialogs: DialogsPageType;
    messageText: string;
    dispatch: (action: ActionsType) => void;
}
export const Dialogs = (props: DialogsPropsType) => {

    const dialogs = props.dialogs.arrayUsers.map((user: UserType) => <Dialog name={user.name}/>);

    return (
        <div style={{backgroundColor: 'blueviolet', display: 'grid', gridTemplateColumns: '2fr 10fr'}}
             className={'content'}>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {dialogs}
                </ul>
            </div>
            <Messages arrayMessages={props.dialogs.arrayMessages} messageText={props.dialogs.messageText} dispatch={props.dispatch}/>
        </div>
    );
};
