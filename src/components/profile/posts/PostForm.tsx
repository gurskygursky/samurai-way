import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type PostTextDataType = {
    post: string;
}

const PostForm: React.FC<InjectedFormProps<PostTextDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="post"
                    component="input"
                    type="input"
                    placeholder="Enter your message..."
                />
            </div>
            <button type={'submit'}>Send</button>
        </form>
    );
}

export const PostReduxForm = reduxForm<PostTextDataType>({
    form: 'postForm',
})(PostForm);