import React from 'react';

type MessagePropsType = {
    message: string;
}

export const Message = (props: MessagePropsType) => {
    return (
        <li>
            {props.message}
        </li>
    )
}