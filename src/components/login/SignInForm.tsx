import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {SignInDataType} from "./index";

export const SignInForm: React.FC<InjectedFormProps<SignInDataType>> = ({handleSubmit, reset}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <div>
                    <Field
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                    />
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                </div>
            </div>
            <div>
                <label>Confirm Password</label>
                <div>
                    <Field
                        name="confirmPassword"
                        component="input"
                        type="password"
                        placeholder="confirmPassword"
                    />
                </div>
            </div>
            <div>
                <label>Remember Me</label>
                <div>
                    <Field
                        name="checkbox"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
                <button type="button" onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}
export const SignInReduxForm = reduxForm<SignInDataType>({
    form: 'signIn' // a unique identifier for this form
})(SignInForm)