import React from 'react';
import {Message} from './Message';
import {MessageType} from './../../redux/state';

type MessagesPropsType = {
    arrayMessages: Array<MessageType>;
}

export const Messages = (props: MessagesPropsType) => {

    const messages = props.arrayMessages.map((message: MessageType) => <Message message={message.message}/>);

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {messages}
            </ul>
            <textarea placeholder={'Enter your message'}/>
        </div>
    );
};
