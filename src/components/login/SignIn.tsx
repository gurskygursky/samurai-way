import React from 'react';
import {ProfileResponseType} from "./../../redux/types";
import {SignInDataType} from "./index";
import {useDispatch} from "react-redux";
import {signInThunk} from "./../../redux/reducers/auth-reducer";
import {SignInReduxForm} from "./SignInForm";

type PropsType = {
    isAuth: boolean;
    profile: ProfileResponseType;
    status: string;
}


export const SignIn: React.FC<PropsType> = ({isAuth, ...props}) => {
    const dispatch = useDispatch();
    const handleSubmit = (signInData: SignInDataType) => {
        dispatch(signInThunk(signInData))
    }
    return (
        <div style={{backgroundColor: 'lightpink', color: 'whitesmoke'}}>
            <SignInReduxForm onSubmit={handleSubmit}/>
        </div>
    );
};

