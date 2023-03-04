import React from 'react';
import {Message} from './Message';
import {MessageType} from 'src/redux/types';
import {MessagesContainerType} from "./MessagesContainer";
import {useDispatch} from "react-redux";
import {SendMessageActionCreator} from "./../../redux/reducers/dialogs-reducer";
import {MessageFormType, MessageReduxForm} from "./MessageForm";
import {reset} from "redux-form";

export const Messages = (props: MessagesContainerType) => {

    const messages = props.arrayMessages.map((message: MessageType) => <Message key={message.id}
                                                                                message={message.message}/>);
    const dispatch = useDispatch();

    // const [inputValue, setInputValue] = useState('');

    // const sendMessage = () => {
    //     props.sendMessage(inputValue);
    //     setInputValue('');
    // }

    // const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     setInputValue(event.currentTarget.value);
    // }

    // const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //
    //     const {key} = event;
    //
    //     if (key === 'Enter') {
    //         sendMessage();
    //     }
    // }

    const handleSubmit = (messageData: MessageFormType) => {
        dispatch(SendMessageActionCreator(messageData.message));
        dispatch(reset('messageForm'));
    }

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {messages}
            </ul>
            <MessageReduxForm onSubmit={handleSubmit}/>
            {/*<textarea value={inputValue} onChange={onChangeMessageHandler} placeholder={'Enter your message'}*/}
            {/*       onKeyDown={onKeyPressHandler}/>*/}
            {/*<button onClick={sendMessage}>Send</button>*/}
        </div>
    );
};
