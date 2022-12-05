import React from 'react';
import {Dialog} from 'src/components/messages/dialogs/Dialog';
import {UserType} from './../../../redux/types';
import {DialogsContainerType} from 'src/components/messages/dialogs/DialogsContainer';
import {MessagesContainer} from 'src/components/messages/MessagesContainer';

export const Dialogs = (props: DialogsContainerType) => {

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
        </div>
    );
};
