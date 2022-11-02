import React from 'react';
import {Message} from './Message';

type MessageType = {
    id: number;
    message: string;
}

export const Messages = () => {

    const ArrayMessages: Array<MessageType> = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello, IT-INC!'},
        {id: 3, message: 'How are you?'},
    ];

    const messageItems = ArrayMessages.map((message: MessageType) => <Message message={message.message}/>);

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {messageItems}
                {/*<Message message={'Hi!'} />*/}
                {/*<Message message={'Hello, IT-INC!'} />*/}
                {/*<Message message={'How are you?'} />*/}
                {/*<Message message={ArrayMessages[0].message} />*/}
                {/*<Message message={ArrayMessages[1].message} />*/}
                {/*<Message message={ArrayMessages[2].message} />*/}
                {/*<li>Hi!</li>*/}
                {/*<li>How are you?</li>*/}
                {/*<li>Hello, IT-INC!</li>*/}
            </ul>
            <textarea placeholder={'Enter your message'}/>
        </div>
    )
}