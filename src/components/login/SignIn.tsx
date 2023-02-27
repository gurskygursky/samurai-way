import React from 'react';
import {NavLink} from "react-router-dom";
import {AuthUserDataResponseType} from "./../../redux/types";

type PropsType = {
    isAuth: boolean;
    authData: AuthUserDataResponseType;
}

export const SignIn: React.FC<PropsType> = ({isAuth, ...props}: PropsType) => {
    return (
        <div style={{backgroundColor: 'lightpink', color: 'whitesmoke'}}>
            {
                isAuth
                    ? props.authData.login
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>
            }
        </div>
    );
};
