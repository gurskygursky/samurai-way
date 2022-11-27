import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Message} from './Message';
import {ActionsType, MessageType} from 'src/redux/my-first-store';
import {SendMessageActionCreator} from './../../redux/reducers/dialogs-reducer';
import {MessagesContainerType} from './../../components/messages/MessagesContainer';
import {useSelector} from 'react-redux';

type MessagesPropsType = {
    // arrayMessages: Array<MessageType>;
    // messageText: string;
    // dispatch: (action: ActionsType) => void;
}

export const Messages = (props: MessagesContainerType) => {

    const messages = props.arrayMessages.map((message: MessageType) => <Message key={message.id} message={message.message}/>);

    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        props.sendMessage(inputValue);
        setInputValue('');
        // props.dispatch(SendMessageActionCreator());
        // props.dispatch(UpdateMessageTextActionCreator(''));
    }

    const onChangeMessageHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // props.dispatch(UpdateMessageTextActionCreator(event.currentTarget.value));
        setInputValue(event.currentTarget.value);
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
            <input value={inputValue} onChange={onChangeMessageHandler} placeholder={'Enter your message'}
                   onKeyDown={onKeyPressHandler}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
