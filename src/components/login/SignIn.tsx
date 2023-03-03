import React, {ComponentType} from 'react';
import {NavLink} from "react-router-dom";
import {AuthUserDataResponseType} from "./../../redux/types";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {compose} from "redux";
import {SignInDataType} from "./index";

type PropsType = {
    // isAuth: boolean;
    // authData: AuthUserDataResponseType;
    handleSubmit: (singInData: SignInDataType) => void;
    reset: () => void;
}

// export const SignIn: React.FC<PropsType> = ({isAuth, ...props}: PropsType) => {
//     return (
//         <div style={{backgroundColor: 'lightpink', color: 'whitesmoke'}}>
//             {
//                 isAuth
//                     ? props.authData.login
//                     : <NavLink to={'/login'}>
//                         Login
//                     </NavLink>
//             }
//         </div>
//     );
// };

export const SignIn: React.FC<PropsType> = ({...props}) => {
    return (
        <div style={{backgroundColor: 'lightpink', color: 'whitesmoke'}}>
            <SignInReduxForm onSubmit={props.handleSubmit} reset={props.reset}/>
        </div>
    );
};

export const SignInForm: React.FC<InjectedFormProps<SignInDataType>> = ({handleSubmit, reset, ...props}) => {

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
                <button type="submit" >
                    Submit
                </button>
                <button type="button" onClick={reset}>
                    Clear Values
                </button>
                {/*<button type="submit" disabled={pristine || submitting}>*/}
                {/*    Submit*/}
                {/*</button>*/}
                {/*<button type="button" disabled={pristine || submitting} onClick={reset}>*/}
                {/*    Clear Values*/}
                {/*</button>*/}
            </div>
        </form>
    )
}

export const SignInReduxForm = reduxForm<SignInDataType>({
    form: 'signIn' // a unique identifier for this form
})(SignInForm)
