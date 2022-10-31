import React from 'react';
import { Message } from './Message';

export const Messages = () => {
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                <Message message={'Hi!'} />
                <Message message={'Hello, IT-INC!'} />
                <Message message={'How are you?'} />
                {/*<li>Hi!</li>*/}
                {/*<li>How are you?</li>*/}
                {/*<li>Hello, IT-INC!</li>*/}
            </ul>
            <textarea placeholder={'Enter your message'}/>
        </div>
    )
}