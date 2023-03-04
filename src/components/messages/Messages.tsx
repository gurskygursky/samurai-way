import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Message} from './Message';
import {MessageType} from 'src/redux/types';
import {MessagesContainerType} from "./MessagesContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useDispatch} from "react-redux";
import {SendMessageActionCreator} from "./../../redux/reducers/dialogs-reducer";

const initialData = {
    message: '',
}
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
type MessageFormType = {
    message: string;
}
const MessageForm: React.FC<InjectedFormProps<MessageFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="message"
                    component="input"
                    type="input"
                    placeholder="Enter your message..."
                />
            </div>
            <button type={'submit'}>Send</button>
        </form>
    );
}

 export const MessageReduxForm = reduxForm<MessageFormType>({
    form: 'postForm' // a unique identifier for this form
})(MessageForm);
