import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Message} from './Message';
import {ActionsType, MessageType} from './../../redux/store';
import {SendMessageActionCreator, UpdateMessageTextActionCreator} from './../../redux/reducers/dialogs-reducer';

type MessagesPropsType = {
    arrayMessages: Array<MessageType>;
    messageText: string;
    dispatch: (action: ActionsType) => void;
}

export const Messages = (props: MessagesPropsType) => {

    const messages = props.arrayMessages.map((message: MessageType) => <Message message={message.message}/>);

    const sendMessage = () => {
        props.dispatch(SendMessageActionCreator());
        props.dispatch(UpdateMessageTextActionCreator(''));
    }

    const onChangeMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(UpdateMessageTextActionCreator(event.currentTarget.value));
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {

        const {key} = event;

        if (key === 'Enter') {
            sendMessage();
        }
    }

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {messages}
            </ul>
            <input value={props.messageText} onChange={onChangeMessageHandler} placeholder={'Enter your message'}
                   onKeyDown={onKeyPressHandler}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
