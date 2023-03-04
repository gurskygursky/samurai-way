import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type MessageFormType = {
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
    form: 'messageForm',
})(MessageForm);