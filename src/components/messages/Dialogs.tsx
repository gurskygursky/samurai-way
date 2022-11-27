import React from 'react';
import {Dialog} from './Dialog';
import {Messages} from './Messages';
import {ActionsType, DialogsPageType, UserType} from 'src/redux/my-first-store';
import {DialogsContainerType} from './../messages/DialogsContainer';
import {MessagesContainer} from './../../components/messages/MessagesContainer';

type DialogsPropsType = {
    // dialogs: DialogsPageType;
    // messageText: string;
    // dispatch: (action: ActionsType) => void;
}
export const Dialogs = (props: DialogsContainerType) => {

    // const dialogs = props.dialogs.arrayUsers.map((user: UserType) => <Dialog name={user.name}/>);
    const dialogs = props.arrayUsers.map((user: UserType, index) => <Dialog key={index} name={user.name}/>);

    return (
        <div style={{backgroundColor: 'blueviolet', display: 'grid', gridTemplateColumns: '2fr 10fr'}}
             className={'content'}>
            <div>
                <ul style={{listStyle: 'none'}}>
                    {dialogs}
                </ul>
            </div>
            <MessagesContainer/>
            {/*<Messages arrayMessages={props.dialogs.arrayMessages}*/}
            {/*          messageText={props.dialogs.messageText}*/}
            {/*          dispatch={props.dispatch}*/}
            {/*/>*/}
        </div>
    );
};
