import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Message} from './Message';
import {MessageType} from 'src/redux/types';
import {MessagesContainerType} from './../../components/messages/MessagesContainer';

export const Messages = (props: MessagesContainerType) => {

    const messages = props.arrayMessages.map((message: MessageType) => <Message key={message.id}
                                                                                message={message.message}/>);

    const [inputValue, setInputValue] = useState('');

    const sendMessage = () => {
        props.sendMessage(inputValue);
        setInputValue('');
    }

    const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.currentTarget.value);
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {

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
            <textarea value={inputValue} onChange={onChangeMessageHandler} placeholder={'Enter your message'}
                   onKeyDown={onKeyPressHandler}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};
