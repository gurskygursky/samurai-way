import React, {ComponentType} from "react";
import {connect, ConnectedProps} from "react-redux";
import {requestIsAuth, setAuthUserData, isAuthMe} from "./../../redux/reducers/auth-reducer";
import {RootStoreType} from "./../../redux/store";
import {AuthUserDataResponseType} from "./../../redux/types";
import {SignIn} from "./../login/SignIn";
import {compose} from "redux";


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

export class SignInContainerWithRequest extends React.Component<SignInContainerPropsType, any> {
    componentDidMount() {
        this.props.isAuthMe();
    }

    render() {
        return (
            <>
                <SignIn isAuth={this.props.isAuth} authData={this.props.authData}/>
            </>
        )
    }
}

export const ConnectComponent = connect(mapStateToProps, {
    setAuthUserData, requestIsAuth, isAuthMe,
});

export type SignInContainerPropsType = ConnectedProps<typeof ConnectComponent>;
export const SignInContainer = compose<ComponentType>(ConnectComponent)(SignInContainerWithRequest);
