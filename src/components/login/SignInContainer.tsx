import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {requestIsAuth, setAuthUserData} from "./../../redux/reducers/auth-reducer";
import {RootStoreType} from "./../../redux/store";
import {AuthUserDataResponseType} from "./../../redux/types";
import {SignInContainerWithRequest} from "./../../components/login/SignInContainerWithRequest";



type mapStateToPropsType = {
    authData: AuthUserDataResponseType,
    isAuth: boolean;
}
const mapStateToProps = (state: RootStoreType): mapStateToPropsType => {
    return {
        authData: state.authReducer.authData,
        isAuth: state.authReducer.isAuth,
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setAuthUserData, requestIsAuth
});

export type SignInContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const SignInContainer = ConnectComponent(SignInContainerWithRequest);
